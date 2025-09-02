'use client';
import React from 'react';
import styles from './FormSample.module.css';

function FormSample() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>用户注册</h1>
      <input type='text' placeholder='请输入11位手机号' minLength={11} maxLength={11} />
      <div>
        <input type='text' placeholder='请输入验证码' />
        <button>获取验证码</button>
      </div>
      <input type='password' placeholder='请输入密码' /><br />
      <input type='password' placeholder='请再次确认密码' /><br />
      <select name='hobby' id='hobby'>
        <option value='read'>读书</option>
        <option value='movie'>看电影</option>
        <option value='music'>听音乐</option>
        <option value='sport'>运动</option>
        <option value='other'>其他</option>
      </select>
      <div>
        <label>性别</label>
        <input id='male' type='radio' name='gender' value='male' />
        <label htmlFor='male'>男</label>
        <input id='female' type='radio' name='gender' value='female' />
        <label htmlFor='female'>女</label>
      </div>
      <textarea placeholder='请输入个人介绍' />
      <div>
        <input type='checkbox' name='agreement' id='agreement' />
        <label htmlFor='agreement'>同意用户协议</label>
      </div>
      <button type='submit'>提交</button>
      <button type='reset'>重置</button>
    </form>
  );
}

export default FormSample;