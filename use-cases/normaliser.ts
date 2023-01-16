class Normaliser {
  normalise(input: string) {
    // string includes with regex

    const regex = {
      engineer: /engineer/i,
      accountant: /accountant/i,
    };

    const engineer = new RegExp(regex.engineer).test(input)
      ? "Software Engineer"
      : "";
    const accountant = new RegExp(regex.accountant).test(input)
      ? "Accountant"
      : "";

    const result = [engineer, accountant].find(Boolean);

    console.info(result);

    return result;
  }
}

export default Normaliser;