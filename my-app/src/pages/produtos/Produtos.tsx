import { Suspense } from "react";
import CarregandoProdutos from "../../components/CarregandoProdutos";
import ListaProdutos from "./ListaProdutos";
export default function Produtos() {
  document.title = "Produtos";
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold text-slate-900">Produtos</h1>
        <Suspense fallback={<CarregandoProdutos />}>
          <ListaProdutos />
        </Suspense>
      </div>
    </main>
  );
}
