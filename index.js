const admin = require('firebase-admin');

admin.initializeApp({
    // credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://basic-shop-e2c7a.firebaseio.com',
});

const auth = admin.auth();

const uid = 'Vk5uzHR6sBZ4jBZhMikJdAwDsky2';

const customClaims = {
    //roles: ['creator', 'auditor', 'admin']
    admin: true,
    level: 7,
};

(async () => {
    await auth.setCustomUserClaims(uid, customClaims);
    const user = await auth.getUser(uid);
    console.log('success', user);
    process.exit();
})();
