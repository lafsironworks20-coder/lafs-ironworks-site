import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen font-sans">
      <header className="p-6 bg-zinc-800 shadow-md">
        <h1 className="text-3xl font-bold text-amber-400">LaF's Ironworks</h1>
        <p className="text-zinc-300">Handcrafted Knives • U.S. Made • Custom Orders</p>
      </header>

      <section className="p-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <Card className="bg-zinc-800 text-white border-zinc-700">
          <CardContent>
            <img src="/images/edc-knife1.jpg" alt="EDC Knife 1" className="rounded-xl mb-4" />
            <h2 className="text-xl font-semibold text-amber-300">EDC Knife – Satin Finish</h2>
            <p className="text-sm text-zinc-400">Everyday carry knife with a satin-finish 1095 steel blade and red G10 scales with brass hardware.</p>
            <Button className="mt-4 bg-amber-600 hover:bg-amber-700">Buy Now</Button>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800 text-white border-zinc-700">
          <CardContent>
            <img src="/images/edc-knife2.jpg" alt="EDC Knife 2" className="rounded-xl mb-4" />
            <h2 className="text-xl font-semibold text-amber-300">EDC Knife – Blackened Blade</h2>
            <p className="text-sm text-zinc-400">Tactical look with a blackened 1095 steel blade and eye-catching red G10 handle.</p>
            <Button className="mt-4 bg-amber-600 hover:bg-amber-700">Buy Now</Button>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800 text-white border-zinc-700">
          <CardContent>
            <img src="/images/edc-knife3.jpg" alt="EDC Knife 3" className="rounded-xl mb-4" />
            <h2 className="text-xl font-semibold text-amber-300">EDC Knife – Satin Edge</h2>
            <p className="text-sm text-zinc-400">Polished edge with clean grind lines, great for collectors or everyday use. Built for reliability.</p>
            <Button className="mt-4 bg-amber-600 hover:bg-amber-700">Buy Now</Button>
          </CardContent>
        </Card>
      </section>

      <section className="p-6 bg-zinc-900 border-t border-zinc-700">
        <h2 className="text-2xl text-amber-400 mb-4">Gallery</h2>
        <p className="text-zinc-300 mb-6">Take a closer look at our craftsmanship and past custom builds.</p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <img src="/images/gallery1.jpg" alt="Gallery 1" className="rounded-xl object-cover w-full" />
          <img src="/images/gallery2.jpg" alt="Gallery 2" className="rounded-xl object-cover w-full" />
          <img src="/images/gallery3.jpg" alt="Gallery 3" className="rounded-xl object-cover w-full" />
        </div>
      </section>

      <section className="p-6 bg-zinc-800 border-t border-zinc-700">
        <h2 className="text-2xl text-amber-400 mb-2">Custom Orders</h2>
        <p className="text-zinc-300 mb-4">
          Want a one-of-a-kind blade? Reach out below to start your custom knife order.
        </p>
        <form className="grid gap-4 max-w-md">
          <input type="text" placeholder="Your Name" className="p-2 rounded bg-zinc-700 text-white" />
          <input type="email" placeholder="Email" className="p-2 rounded bg-zinc-700 text-white" />
          <textarea placeholder="Describe your custom knife" rows="4" className="p-2 rounded bg-zinc-700 text-white" />
          <Button className="bg-amber-600 hover:bg-amber-700">Send Request</Button>
        </form>
      </section>

      <footer className="p-6 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} LaF's Ironworks • Handmade in the USA
      </footer>
    </div>
  );
}
