function slugify(title) {
  return title
    .toLowerCase()                           // Küçük harfe çevir
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Türkçe karakterleri sadeleştir (ç -> c, ö -> o vb.)
    .replace(/[^a-z0-9\s-]/g, "")            // Harf, sayı ve boşluk dışında her şeyi kaldır
    .trim()                                  // Baştaki ve sondaki boşlukları kaldır
    .replace(/\s+/g, "-")                    // Birden fazla boşluğu tek tireye çevir
    .replace(/-+/g, "-");                    // Birden fazla tireyi teke indir
}

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
