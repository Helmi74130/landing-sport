export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">Des résultats concrets, mesurables et durables.</h2>
                    <p>Nous accompagnons chaque jour des clubs et marques sportives dans leur croissance digitale.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+120</div>
                        <p>projets menés</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+33</div>
                        <p>pays où nos clients se développent</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">99%</div>
                        <p>satisfaction client</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
