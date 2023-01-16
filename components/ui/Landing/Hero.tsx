import Link from "next/link"

export default function Hero() {

  return (
    <div className="isolate">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                  Si está buscando el sitio www.timbo.com.ar {' '}
                    <a href="https://www.timbo.com.ar/" target='_blank' className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Ir al sitio <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                 Bienvenidos a Timbó
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  Aplicación web en dónde clientes y Timbó convergen para realizar distintas tareas del órden administrativo, para satisfacer necesidades comerciales.
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <Link
                    href="/Login/Enter"
                    className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    Iniciar sesión{' '}
                    <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                  <Link
                    href="/Login/Register"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                  >
                    Crear cuenta{' '}
                    <span className="text-gray-400" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
