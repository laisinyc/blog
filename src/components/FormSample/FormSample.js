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
      <div className={styles.formItem} >
        <input type='text' placeholder='请输入11位手机号' minLength={11} maxLength={11} />
      </div>
      <div className={styles.formItem} >
        <input type='text' placeholder='请输入验证码' />
        {/* 默认情况下，button是submit按钮，需要设置type为button */}
        <button type='button'>获取验证码</button>
      </div>
      <div className={styles.formItem} >
        <input type='password' placeholder='请输入密码' /><br />
      </div>
      <div className={styles.formItem} >
        <input type='password' placeholder='请再次确认密码' /><br />
      </div>
      <div className={styles.formItem} >
        <select name='hobby' id='hobby' multiple>
          <option value='read' selected>读书</option>
          <option value='movie'>看电影</option>
          <option value='music' selected>听音乐</option>
          <option value='sport'>运动</option>
          <option value='other'>其他</option>
        </select>
      </div>
      <div className={styles.formItem} >
        <div className={styles.radioLabel} >性别</div>
        <div className={styles.radioGroup} >
          <input id='male' type='radio' name='gender' value='male' />
          <label htmlFor='male'>男</label>
          {/* lable包裹input标签，相当于for属性指向input标签的id属性 */}
          <label>
            <input id='female' type='radio' name='gender' value='female' checked />
            <span>女</span>
          </label>
        </div>
      </div>
      <div className={styles.formItem} >
        <textarea placeholder='请输入个人介绍' />
      </div>
      <div className={styles.formItem} >
        <input type='checkbox' name='agreement' id='agreement' />
        <label htmlFor='agreement'>同意用户协议</label>
      </div>
      <div className={styles.formItem} >
        <button type='submit'>提交</button>
        <button type='reset'>重置</button>
      </div>
    </form >
  );
}

export default FormSample;