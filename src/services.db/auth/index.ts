'use server';


interface IProps {
    authProvider: any;
    authProfile: any;
}

const signIn = async ({authProvider, authProfile}: IProps) => {
    try {
        console.log('authProvider', authProvider);
        return await new Promise((resolve, reject) => {
            resolve({authProvider, authProfile})
        });
    } catch (error) {
        console.error('Error: ', error)
        throw new Error('Error signing in.');
    }
}

export {
    signIn
}