import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
import { LinksFunction } from "@remix-run/react/dist/routeModules";
import Navbar from "./components/navbar";
import Card from "./components/card";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

export const meta: MetaFunction = () => [{
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
}];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}

function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-3xl mx-auto xl:mt-16 lg:mt-10 mt-8 px-10 pb-10">
      <motion.article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={{
          hidden: { opacity: 0, x: 0, y: 20 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: 20 }
        }}
        transition={{ duration: 0.5, type: 'easeInOut' }}
        style={{ position: 'relative' }}>

        <nav>
          <Navbar />
        </nav>

        <main>
          <Card className="text-center bg-slate-700">
            <div>
              <Typewriter
                onInit={(typewritter) => {
                  typewritter.typeString("Hello World!, I'm <strong>Fanes Pratama</strong>, a Full-stack Web Developer from Indonesia!").start()
                }}
              />
            </div>
          </Card>
          {props.children}
        </main>

      </motion.article>
    </div>
  )
}