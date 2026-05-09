export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

export function formatPrice(price: number): string {
  return price % 1 === 0 ? `${price}₹` : `${price.toFixed(2)}₹`;
}
