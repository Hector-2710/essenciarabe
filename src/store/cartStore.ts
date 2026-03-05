import { atom, map } from 'nanostores';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    brand?: string;
}

export const isCartOpen = atom(false);

// Función para cargar datos del localStorage de manera segura
function loadCartFromStorage(): Record<string, CartItem> {
    if (typeof window === 'undefined') return {};

    try {
        const savedItems = localStorage.getItem('cart_items');
        return savedItems ? JSON.parse(savedItems) : {};
    } catch (error) {
        console.warn('Error loading cart from localStorage:', error);
        return {};
    }
}

// Función para guardar en localStorage de manera segura
function saveCartToStorage(items: Record<string, CartItem>) {
    if (typeof window === 'undefined') return;

    try {
        localStorage.setItem('cart_items', JSON.stringify(items));
    } catch (error) {
        console.warn('Error saving cart to localStorage:', error);
    }
}

export const cartItems = map<Record<string, CartItem>>(loadCartFromStorage());

// Suscripción para guardar automáticamente
cartItems.subscribe((items) => {
    saveCartToStorage(items);
});

export function openCart() {
    isCartOpen.set(true);
}

export function closeCart() {
    isCartOpen.set(false);
}

export function toggleCart() {
    isCartOpen.set(!isCartOpen.get());
}

export function addToCart(product: Omit<CartItem, 'quantity'>) {
    console.log('Adding to cart:', product);

    const currentItems = cartItems.get();
    const existingItem = currentItems[product.id];

    if (existingItem) {
        // Incrementar cantidad si ya existe
        cartItems.setKey(product.id, {
            ...existingItem,
            quantity: existingItem.quantity + 1,
        });
        console.log('Updated quantity for:', product.name, 'New quantity:', existingItem.quantity + 1);
    } else {
        // Añadir nuevo producto con cantidad 1
        cartItems.setKey(product.id, {
            ...product,
            quantity: 1,
        });
        console.log('Added new product:', product.name);
    }

    openCart();
}

export function removeFromCart(id: string) {
    const currentItems = { ...cartItems.get() };
    delete currentItems[id];
    cartItems.set(currentItems);
}

export function updateQuantity(id: string, quantity: number) {
    if (quantity <= 0) {
        removeFromCart(id);
        return;
    }
    const existingItem = cartItems.get()[id];
    if (existingItem) {
        cartItems.setKey(id, {
            ...existingItem,
            quantity,
        });
    }
}

export function clearCart() {
    cartItems.set({});
}
