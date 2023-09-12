import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from '../page/home';

test('Test transition screen event', () => {
    // テスト時に画面遷移用のMemoryRouterを使用します
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );

    // useState Page ボタンをクリックしてページ遷移をテスト
    fireEvent.click(screen.getByText('useState Page'));
    expect(screen.getByText('useState Page')).toBeInTheDocument();

    // useEffect Page ボタンをクリックしてページ遷移をテスト
    fireEvent.click(screen.getByText('useEffect Page'));
    expect(screen.getByText('useEffect Page')).toBeInTheDocument();

    // useContext Page ボタンをクリックしてページ遷移をテスト
    fireEvent.click(screen.getByText('useContext Page'));
    expect(screen.getByText('useContext Page')).toBeInTheDocument();

    // useRef Page ボタンをクリックしてページ遷移をテスト
    fireEvent.click(screen.getByText('useRef Page'));
    expect(screen.getByText('useRef Page')).toBeInTheDocument();

    // Custom Hook Page ボタンをクリックしてページ遷移をテスト
    fireEvent.click(screen.getByText('Custom Hook Page'));
    expect(screen.getByText('Custom Hook Page')).toBeInTheDocument();
});
