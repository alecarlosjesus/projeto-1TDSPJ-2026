import { use } from "react";
import { produtosPromise } from "../../service/produto";

export default function ListaProdutos() {
  const produtos = use(produtosPromise);
  if (produtos.length === 0) {
    return (
      <p className="rounded-lg bg-yellow-100 p-4 text-yellow-800">
        Nenhum produto foi encontrado.
      </p>
    );
  }
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-md">
      <table className="w-full border-collapse">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Nome</th>
            <th className="p-3 text-left">Preço</th>
            <th className="p-3 text-left">Estoque</th>
            <th className="p-3 text-left">Avatar</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr
              key={produto.id}
              className="border-b border-slate-200 hover:bg-slate-50"
            >
              <td className="p-3">{produto.id}</td>
              <td className="p-3">{produto.nome}</td>
              <td className="p-3">R$ {produto.preco}</td>
              <td className="p-3">{produto.estoque}</td>
              <td className="p-3"><img src={produto.avatar} alt={produto.nome} /></td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-slate-100 font-semibold">
          <tr>
            <td colSpan={4} className="p-3">
              Quantidade de produtos: {produtos.length}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
