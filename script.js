document.addEventListener('DOMContentLoaded', function() {


    // ===== TOMBOL GANTI MODE =====

    const btnTema = document.querySelector('#btnToggleTema');
    const bodyHalaman = document.querySelector('body');

    btnTema.addEventListener('click', function() {

        bodyHalaman.classList.toggle('light-mode');

        if (bodyHalaman.classList.contains('light-mode')) {

            btnTema.textContent = '🌙 Mode Gelap';

        } else {

            btnTema.textContent = '☀️ Mode Terang';

        }

    });


    // ===== TOMBOL KIRIM PESAN / MODAL =====

    const btnBukaModal = document.querySelector('#btnKontak');
    const elemenModal = document.querySelector('#modalKontak');
    const btnTutupModal = document.querySelector('#btnTutupModal');


    // Membuka modal

    btnBukaModal.addEventListener('click', function(event) {

        event.preventDefault();

        elemenModal.classList.add('show');

    });


    // Menutup modal

    btnTutupModal.addEventListener('click', function() {

        elemenModal.classList.remove('show');

    });


    // ===== TOMBOL TENTANG SAYA =====

    const btnTentangSaya = document.querySelector('#btnTentangSaya');
    const bioText = document.querySelector('.bio-text');


    btnTentangSaya.addEventListener('click', function() {

        bioText.classList.toggle('sembunyi');


        if (bioText.classList.contains('sembunyi')) {

            btnTentangSaya.textContent = 'Tampilkan Tentang Saya';

        } else {

            btnTentangSaya.textContent = 'Sembunyikan Tentang Saya';

        }

    });

});