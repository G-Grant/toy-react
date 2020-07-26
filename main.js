import React from './src/react';
import ReactDOM from './src/react-dom';

ReactDOM.render(
    <div
        className='container'
        onClick={() => {
            console.log('点击页面');
        }}>
        <h1
            id='title'
            className='title'
            data-title='hello'
            onClick={() => {
                console.log('登高');
            }}
            style={{ color: 'red' }}>
            登高
        </h1>
        <p
            onMouseOver={() => {
                console.log('风急天高猿啸哀， 渚清沙白鸟飞回。');
            }}>
            风急天高猿啸哀， 渚清沙白鸟飞回。
        </p>
        <p>无边落木萧萧下， 不尽长江滚滚来。</p>
        <p style={{ marginTop: 30 }}>万里悲秋常作客，百年多病独登台。</p>
        <p>艰难苦恨繁霜鬓， 潦倒新停浊酒杯。</p>
        <input type='text' value={20} readOnly />
    </div>,
    document.getElementById('app')
);
