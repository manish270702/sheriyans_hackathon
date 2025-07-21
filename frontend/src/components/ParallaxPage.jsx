import React from 'react';
import { Parallax } from 'react-parallax';

const ParallaxPage = () => {
    return (
        <div className="text-white">
            {/* Parallax Section 1 */}
            <Parallax
                bgImage="https://images.unsplash.com/photo-1587304791308-7e81b729e1cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                strength={400}
                bgImageStyle={{
                    backgroundPosition: 'center 35%',  // ✅ this is the correct CSS for background-image
    backgroundSize: 'cover', // ← tweak this to shift upward
                }}
            >
                <div className="h-[80vh] flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <h1 className="text-5xl font-bold drop-shadow-lg text-white animate-fade-in-up">
                        Experience Fragrance in Motion
                    </h1>
                </div>
            </Parallax>

            {/* Content Section */}
            <section className="bg-zinc-950 py-16 px-6 text-center">
                <h2 className="text-3xl font-bold text-blue-500 mb-4">Crafted with Passion</h2>
                <p className="max-w-3xl mx-auto text-gray-300 text-lg">
                    Our perfumes are more than scents — they're memories in a bottle. Dive deep into our crafting process and discover what makes EssenceCraft truly timeless.
                </p>
            </section>

            {/* Parallax Section 2 */}
            <Parallax
                bgImage="https://images.unsplash.com/photo-1599342166997-58552e91d9f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                strength={300}
                bgImageStyle={{
                    objectFit: 'cover',
                    objectPosition: 'center 10%', // ← tweak this to shift upward
                }}
            >
                <div className="h-[70vh] flex items-center justify-center bg-black/30">
                    <h2 className="text-4xl font-semibold text-white drop-shadow-md animate-fade-in-up">
                        Scents That Tell a Story
                    </h2>
                </div>
            </Parallax>


            {/* Final CTA Section */}
            <section className="bg-black py-20 text-center px-6">
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Ready to Discover Your Signature Scent?</h2>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition">
                    Shop Now
                </button>
            </section>
        </div>
    );
};

export default ParallaxPage;
