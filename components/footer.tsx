export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Zenstreet AI Form. All rights reserved.
          <p>Made with 💖 by <a href="https://github.com/RiteshS1" target="_blank" className="text-xl text-red-500">RS</a> </p>
      </div>
    
    </footer>
  );
}