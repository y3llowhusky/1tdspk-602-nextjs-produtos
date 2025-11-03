import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  const file = await fs.readFile(
    process.cwd() + "/src/data/produtos.json",
    "utf-8"
  );
  const produtos = JSON.parse(file);

  return NextResponse.json(produtos);
}

export async function POST(request: Request) {
  const filePath = process.cwd() + "/src/data/produtos.json";

  const { name, price, quantity } = await request.json();

  const product = { name, price, quantity, id: Date.now() };
  const file = await fs.readFile(filePath, "utf-8");
  const produtos = JSON.parse(file);
  produtos.push(product);

  await fs.writeFile(filePath, JSON.stringify(produtos));

  return NextResponse.json(product, { status: 201 });
}
