// props yg diisi pada komponen Header.js akan dimasukkan disini (diparameternya)
// dan fungsi ini akan ***MERENDER*** Icon beserta titlenya
// berikan class tailwind css height 8, margin-bottom 1, jenis font "tracking-widest"
// secara default title beropacity 0, artinya tidak terlihat. namun ketika dihover opactinya dijadikan 100,
// ini adalah kelebihan tailwind css, yaitu bisa menerapkan hover state.
// disini yang ada efek hovernya adalah icon dan juga title, jadi buat group-hovernya
// icon dan title akan dirender didalam flexbox flex: containernya flex-col: posisi flex item akan kebawah (vertical)
// item dari flex ini adalah <Icon /> dan <p>
// cursor-pointer: ketika dihover akan jadi pointer
// berikan lebar-12 untuk Headeritem,
// dan ketika masuk ke small break point (sm) maka lebar akan diubah ke 20.
// ketika dihover text jadi warna putih (karena global cssnya warna gray)
// jika perlu memberi gaya pada elemen anak pada saat mengarahkan kursor ke elemen induk, tambahkan class group di parent,
// dan group-hover di child
// animate-bounce memberikan gaya bounce pada icon
function Headeritem({ Icon, title }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
    </div>
  );
}

export default Headeritem;
