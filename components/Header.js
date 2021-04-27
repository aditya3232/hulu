// snippet _rfce (membuat fungsi tanpa import react)
// return berisi html yg benar, jadi tidak pakai <div>
// disini tidak menggunakan redux,
// tidak perlu memperberat app mu dengan ekstra state management,
// render yg perlu dirender,
// semakin ringan aplikasi semakin baik,
// makanya gunakan teknologi yg dapat menghasilkan aplikasi yg smooth, fast, reliable expereince, dan seo friendly.
// <Image /> ini adalah next.js image tag. biasa disebut lazy loaded image. karena akan meload image yg ada dilayar saja,
// tidak keseluruhan, jadi akan lebih hemat di network.
// image tidak akan terlihat jika belum ada style,
// gunakan className = "object-contain"  dari tailwind css untuk wadah objek gambar.

import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Headeritem from './Headeritem';

function Header() {
  return (
    // header adalah elemen parent
    // flex-col: posisi flex item akan kebawah (vertical)
    // flex-row: posisi flex item akan sejajar (horizontal)
    // margin-5 akan memberikan jarak elemen header dengan pinggiran browser
    // justify-between memberikan spasi diantara (dalam kasus ini memberikan spasi antara headeritem dgn Logo),
    // sehingga antara headeritem dan logo berjauhan
    // items-center: akan membuat item berada ditengah kontainer kanan kiri, atas bawah tepat ditengah
    // h-auto: agar browser menentukan ketinggian elemen
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      {/* ini adalah komponen header item */}
      {/* disini akan diberikan props */}
      {/* kapanpun kita membuat kustom komponen kita dapat memberikan properti */}
      {/* props pada dasarnya akan mengizinkan kita menggunakan ulang komponen (reuse component) dengan properti berbeda  */}
      {/* Icon dari heroicons.com karena bekerja sama dengan tailwind css */}
      {/* install dependecies heroiconnya dulu */}
      {/* jangan lupa import icon apa saja yang digunakan. outline yg tanpa warna, solid yg berwarna*/}
      {/* flex, secara default akan menerapkan flex-row */}
      {/* flex-grow akan membolehkan flex-item untuk memenuhi space yg tersedia */}
      {/* justify-evenly: memberikan ruang(spasi) yg sama untuk semua flex-item */}
      {/* max-w-2xl: memberikan lebar max sebesar 2xl. xl adalah breakpoint extra large */}
      {/* breakpoint ada sm:small md:medium lg:large xl:xtra large 2xl:dua kalinya xl */}
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Headeritem title="HOME" Icon={HomeIcon} />
        <Headeritem title="TRENDING" Icon={LightningBoltIcon} />
        <Headeritem title="VERIFIED" Icon={BadgeCheckIcon} />
        <Headeritem title="COLLECTIONS" Icon={CollectionIcon} />
        <Headeritem title="SEARCH" Icon={SearchIcon} />
        <Headeritem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image className="object-contain" src="https://links.papareact.com/ua6" width={200} height={100} />
    </header>
  );
}

export default Header;
