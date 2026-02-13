async function getNum(): Promise<number> {
  return 3;
}

export async function execute() {
  console.log("--- Start Execute ---");

  const num = await getNum();
  console.log("await: ", num);

  getNum().then((num) => {
    console.log("then:  ", num);
  });

  console.log("--- Finish Execute (Sync part) ---");
}
