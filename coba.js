// Class dengan Encapsulation (menggunakan field privat)
class Orang {
  #nama;
  #usia;

  constructor(nama, usia) {
    this.#nama = nama;
    this.#usia = usia;
  }

  // Getter untuk mengambil nama
  getNama() {
    return this.#nama;
  }

  // Getter untuk mengambil usia
  getUsia() {
    return this.#usia;
  }

  // Metode untuk menampilkan data orang
  tampilkanInfo() {
    console.log(`${this.#nama} berusia ${this.#usia} tahun.`);
  }
}

// Class turunan dari Orang tidak cocok, jadi kita ubah pendekatannya
// Kita buat class manajemen daftar orang yang menyimpan banyak objek Orang
class DaftarOrang {
  constructor() {
    this.orangList = [];
  }

  // Metode untuk menambah orang ke daftar
  tambah(nama, usia) {
    const orang = new Orang(nama, usia);
    this.orangList.push(orang);
  }

  // Metode untuk menampilkan semua orang
  tampilkan() {
    console.log("Daftar Orang:");
    this.orangList.forEach(orang => orang.tampilkanInfo());
  }
}

// Contoh penggunaan
const daftar = new DaftarOrang();
daftar.tambah("Muzayyin", 6);
daftar.tambah("Arifin", 12);
daftar.tambah("Nabhan", 15);

// Menampilkan semua data
daftar.tampilkan();
