export const blockchain = {
  chain: "123456",
  addBlock: (data: Record<string, unknown>) => {
    console.log("addBlock", data);
    return data;
  },
};
