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
        <input className={styles.textInput} type='text' placeholder='请输入11位手机号' minLength={11} maxLength={11} />
      </div>
      <div className={[styles.formItem, 'clearfix'].join(' ')} >
        <input type='text' className={['left', styles.textInput, styles.captchaInput].join(' ')} placeholder='请输入验证码' />
        {/* 默认情况下，button是submit按钮，需要设置type为button */}
        <button type='button' className={['right', styles.captchaBtn].join(' ')} disabled>获取验证码</button>
      </div>
      <div className={styles.formItem} >
        <input type='password' className={styles.textInput} placeholder='请输入密码' /><br />
      </div>
      <div className={styles.formItem} >
        <input type='password' className={styles.textInput} placeholder='请再次确认密码' /><br />
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
      {/* 这里注意如何添加 margin */}
      <div className={[styles.formItem, 'clearfix'].join(' ')} >
        <div className={['left', styles.radioTitle].join(' ')} >性别</div>
        <div className={['left', styles.radioGroup].join(' ')} >
          <label>
            <input id='male' type='radio' name='gender' value='male' />
            <span>男</span>
          </label>
          {/* lable包裹input标签，相当于for属性指向input标签的id属性 */}
          <label>
            {/* <input id='female' type='radio' name='gender' value='female' checked /> */}
            <input id='female' type='radio' name='gender' value='female' />
            <span>女</span>
          </label>
        </div>
      </div>
      <div className={styles.formItem} >
        <textarea className={styles.textInput} placeholder='请输入个人介绍' />
      </div>
      {/* 注意只有对齐多个 inline 以及 inline-block 元素时候，才能使用 vertical-align!!! */}
      <div className={[styles.formItem, styles.agreement].join(' ')} >
        <label>
          <input type='checkbox' />
          <span>仅在对齐 inline 以及 inline-block 元素时候，才能使用 vertical-align!</span>
        </label>
      </div>
      <div className={[styles.formItem, 'clearfix'].join(' ')} >
        <button type='submit' className='left'>提交</button>
        <button type='reset' className='right'>重置</button>
      </div>
    </form >
  );
}

export default FormSample;