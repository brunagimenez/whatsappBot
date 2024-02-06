const authEmail = async (message) => {
    const email = await message.body.toLowerCase();
    console.log(await email);
};

const authPassword = async (message) => {
    const password = await message.body.toLowerCase();
    console.log(await password);
};

module.exports = {
    authEmail,
    authPassword,
};