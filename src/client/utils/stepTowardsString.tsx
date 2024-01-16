export function stepTowardsString(
  from: string,
  to: string,
  reverse = false,
  stepThrough?: string,
): string {
  // TODO: Reverse without so much copying
  if (reverse) {
    return reverseString(
      stepTowardsString(
        reverseString(from),
        reverseString(to),
        false,
        stepThrough,
      ),
    );
  }

  if (from.length > to.length) {
    return from.slice(0, -1);
  }

  const minLength = Math.min(from.length, to.length);

  if (stepThrough) {
    for (let i = 0; i < minLength; i++) {
      if (from.charAt(i) === stepThrough && from.charAt(i) !== to.charAt(i)) {
        return from.slice(0, i) + to.charAt(i) + from.slice(i + 1);
      }
    }
  }

  for (let i = minLength - 1; i >= 0; i--) {
    if (from.charAt(i) !== to.charAt(i)) {
      if (stepThrough && from.charAt(i) !== stepThrough) {
        return from.slice(0, i) + stepThrough + from.slice(i + 1);
      } else {
        return from.slice(0, i) + to.charAt(i) + from.slice(i + 1);
      }
    }
  }

  if (from.length < to.length) {
    if (stepThrough) {
      return from + stepThrough;
    } else {
      return from + to.charAt(minLength);
    }
  }

  // They match
  return to;
}

function reverseString(s: string): string {
  return s.split("").reverse().join("");
}
