export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="text-center text-slate-500">
        <p>
          © {new Date().getFullYear()} Srikesav M.
        </p>

        <p className="mt-2">
          Built with curiosity, consistency, and lots of coffee ☕
        </p>
      </div>
    </footer>
  );
}