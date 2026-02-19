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

const savedItems = typeof window !== 'undefined' ? localStorage.getItem('cart_items') : null;
export const cartItems = map<Record<string, CartItem>>(savedItems ? JSON.parse(savedItems) : {});

cartItems.subscribe((items) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('cart_items', JSON.stringify(items));
    }
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
    const existingItem = cartItems.get()[product.id];
    if (existingItem) {
        cartItems.setKey(product.id, {
            ...existingItem,
            quantity: existingItem.quantity + 1,
        });
    } else {
        cartItems.setKey(product.id, {
            ...product,
            quantity: 1,
        });
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
