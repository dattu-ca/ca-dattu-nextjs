// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { useRouter } from 'next/navigation'
import './media-queries';




// mock useRouter
jest.mock('next/navigation', () => ({
    ...jest.requireActual('next/navigation'),
    useRouter: jest.fn()
}));

beforeEach(() => {
    jest.resetModules();
    useRouter.mockReturnValue({
        push: jest.fn()
    })
})