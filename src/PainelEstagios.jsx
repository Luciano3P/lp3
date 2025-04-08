
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DATA = [
  {
    organizacao: "UNDP",
    vaga: "Internship – Project Management",
    local: "Home Office",
    idiomas: ["Inglês", "Espanhol"],
    beneficio: "Não remunerado",
    prazo: "14/04/2025",
    link: "https://jobs.undp.org/careers/internship-projectmanagement"
  },
  {
    organizacao: "UNESCO",
    vaga: "Estágio em Políticas Educacionais",
    local: "Brasília, Brasil",
    idiomas: ["Português", "Inglês"],
    beneficio: "Remuneração",
    prazo: "20/04/2025",
    link: "https://careers.unesco.org"
  }
];

export default function PainelEstagios() {
  const [senha, setSenha] = useState("");
  const [autenticado, setAutenticado] = useState(false);

  const autenticar = () => {
    if (senha === "malu00") {
      setAutenticado(true);
    } else {
      alert("Senha incorreta");
    }
  };

  if (!autenticado) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-xl font-semibold">Painel de Estágios Internacionais</h1>
        <Input
          type="password"
          placeholder="Digite a senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-64"
        />
        <Button onClick={autenticar}>Acessar</Button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow">LP</div>
          <h2 className="text-2xl font-bold">Vagas Disponíveis</h2>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Organização</TableHead>
            <TableHead>Vaga</TableHead>
            <TableHead>Local</TableHead>
            <TableHead>Idiomas</TableHead>
            <TableHead>Benefício</TableHead>
            <TableHead>Prazo</TableHead>
            <TableHead>Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {DATA.map((vaga, index) => (
            <TableRow key={index}>
              <TableCell>{vaga.organizacao}</TableCell>
              <TableCell>{vaga.vaga}</TableCell>
              <TableCell>{vaga.local}</TableCell>
              <TableCell>{vaga.idiomas.join(", ")}</TableCell>
              <TableCell>{vaga.beneficio}</TableCell>
              <TableCell>{vaga.prazo}</TableCell>
              <TableCell>
                <a href={vaga.link} target="_blank" className="text-blue-500 underline">Acessar</a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-6 flex justify-end">
        <Button onClick={() => alert("Resumo enviado para lucianoperilo@gmail.com")}>Receber resumo por e-mail</Button>
      </div>
    </div>
  );
}
