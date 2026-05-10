export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-vault-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-vault-text-dim text-xs font-mono space-y-1">
          <div>
            <span className="text-vault-blue">{">"}</span> Built with Next.js + Tailwind CSS
          </div>
          <div>
            <span className="text-vault-blue">{">"}</span> War. War never changes.
          </div>
          <div className="text-vault-border mt-3">
            &copy; {new Date().getFullYear()} Andy Baulita — Vault Dweller #2026
          </div>
        </div>
      </div>
    </footer>
  );
}
