// Ikon aplikasi memakai SVG dari library lucide-react (bukan lagi ikon "pixel/blocky" buatan sendiri).
// Nama komponen & file tetap "PixelIcon" supaya semua pemanggilan di halaman lain tidak perlu diubah,
// tapi isinya sekarang ikon garis (outline) biasa yang mengikuti warna teks (currentColor).
import {
  Calculator,
  BookA,
  Languages,
  Landmark,
  FlaskConical,
  Lock,
  Star,
  Check,
  X,
  ArrowLeft,
  ArrowRight,
  SkipForward,
  Home,
  Trophy,
  Map,
  Flag,
  RefreshCw,
  LayoutGrid,
  NotebookText,
  Info,
  ClipboardList,
} from "lucide-react";

const ICONS = {
  math: Calculator,
  bookId: BookA,
  letterA: Languages,
  landmark: Landmark,
  flask: FlaskConical,
  lock: Lock,
  star: Star,
  check: Check,
  close: X,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  skip: SkipForward,
  home: Home,
  trophy: Trophy,
  map: Map,
  flag: Flag,
  refresh: RefreshCw,
  grid: LayoutGrid,
  book: NotebookText,
  info: Info,
  analysis: ClipboardList,
};

export default function PixelIcon({ name, size = 20, className }) {
  const Comp = ICONS[name];
  if (!Comp) return null;
  return <Comp size={size} className={className} strokeWidth={2} />;
}