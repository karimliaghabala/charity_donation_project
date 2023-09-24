
// "Donate" öğesini seçin
const donateLink = document.querySelector('.navbar li p');

// "nav-klik" sınıfına sahip div'i seçin
const navKlikDiv = document.querySelector('.nav-klik');

// "Donate" öğesine tıklandığında çalışacak fonksiyon
donateLink.addEventListener('click', function () {
  // "nav-klik" sınıfına sahip div'in görünürlüğünü kontrol edin
  if (getComputedStyle(navKlikDiv).display === 'none') {
    // Eğer gizliyse, görünür hale getirin
    navKlikDiv.style.display = 'block';
  } else {
    // Eğer görünürse, gizleyin
    navKlikDiv.style.display = 'none';
  }
});
