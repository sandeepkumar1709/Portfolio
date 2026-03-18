export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-black/5 bg-sand py-6 text-center">
      <p className="text-sm text-graphite">
        Made by Sandeep Poloju • All Rights Reserved • {year}
      </p>
    </footer>
  )
}
