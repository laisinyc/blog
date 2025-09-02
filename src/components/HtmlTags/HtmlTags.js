'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import Card from '@/components/Card';
import MarkdownCode from '@/components/MarkdownCode';
import styles from './HtmlTags.module.css';

function HtmlTags() {
  const [selectedRadio, setSelectedRadio] = React.useState('option1');
  const [checkboxes, setCheckboxes] = React.useState({
    feature1: false,
    feature2: false,
    feature3: false
  });
  const [selectedDropdown, setSelectedDropdown] = React.useState('');

  const handleCheckboxChange = (name) => {
    setCheckboxes(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const radioOptions = [
    { id: 'option1', label: 'Option 1', description: 'First choice' },
    { id: 'option2', label: 'Option 2', description: 'Second choice' },
    { id: 'option3', label: 'Option 3', description: 'Third choice' }
  ];

  const checkboxOptions = [
    { id: 'feature1', label: 'Feature 1', description: 'Enable first feature' },
    { id: 'feature2', label: 'Feature 2', description: 'Enable second feature' },
    { id: 'feature3', label: 'Feature 3', description: 'Enable third feature' }
  ];

  const dropdownOptions = [
    { value: '', label: 'Select an option...' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const radioVariants = {
    unselected: { scale: 1, borderColor: '#d1d5db' },
    selected: {
      scale: 1.1,
      borderColor: '#3b82f6',
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const checkboxVariants = {
    unchecked: { scale: 1, backgroundColor: '#f9fafb' },
    checked: {
      scale: 1.1,
      backgroundColor: '#10b981',
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  const labelVariants = {
    normal: { color: '#374151' },
    focused: {
      color: '#3b82f6',
      transition: { duration: 0.2 }
    }
  };

  const attributesVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  // HTML code samples for each form element type
  const radioCodeSample = `<!-- Radio Buttons Example -->
<input type="radio" name="radioGroup" value="option1" id="option1">
<input type="radio" name="radioGroup" value="option2" id="option2">
<input type="radio" name="radioGroup" value="option3" id="option3">`;

  const checkboxCodeSample = `<!-- Checkboxes Example -->
<input type="checkbox" id="feature1" name="features" value="feature1">
<input type="checkbox" id="feature2" name="features" value="feature2">
<input type="checkbox" id="feature3" name="features" value="feature3">`;

  const dropdownCodeSample = `<!-- Dropdown Example -->
<select name="technology" id="tech-select">
  <option value="">Select an option...</option>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="javascript">JavaScript</option>
  <option value="react">React</option>
</select>`;

  return (
    <motion.div
      className={styles.demoArea}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Radio Buttons Section */}
      < motion.div className={styles.section} variants={itemVariants} >
        <motion.h4
          className={styles.sectionTitle}
          whileHover={{ color: '#3b82f6' }}
          transition={{ duration: 0.2 }}
        >
          Radio Buttons
        </motion.h4>

        {/* HTML Code Sample */}
        <MarkdownCode
          content={radioCodeSample}
          language="html"
          title="HTML Code Sample"
          showLineNumbers={true}
          className={styles.codeSample}
        />

        <div className={styles.radioGroup}>
          {radioOptions.map((option) => (
            <motion.div
              key={option.id}
              className={styles.radioItem}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className={styles.radioContainer}
                variants={radioVariants}
                animate={selectedRadio === option.id ? 'selected' : 'unselected'}
              >
                <input
                  type="radio"
                  id={option.id}
                  name="radioGroup"
                  value={option.id}
                  checked={selectedRadio === option.id}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                  className={styles.radioInput}
                />
                <motion.div
                  className={styles.radioDot}
                  initial={false}
                  animate={selectedRadio === option.id ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <div className={styles.radioContent}>
                <motion.label
                  htmlFor={option.id}
                  className={styles.radioLabel}
                  variants={labelVariants}
                  animate={selectedRadio === option.id ? 'focused' : 'normal'}
                >
                  {option.label}
                </motion.label>
                <p className={styles.radioDescription}>{option.description}</p>

                {/* HTML Attributes Display */}
                <motion.div
                  className={styles.attributesContainer}
                  variants={attributesVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className={styles.attributesTitle}>HTML Attributes:</div>
                  <div className={styles.attributesList}>
                    <code className={styles.attribute}>
                      type=&quot;radio&quot;
                    </code>
                    <code className={styles.attribute}>
                      name=&quot;radioGroup&quot;
                    </code>
                    <code className={styles.attribute}>
                      value={option.id}
                    </code>
                    <code className={styles.attribute}>
                      id={option.id}
                    </code>
                    {selectedRadio === option.id && (
                      <motion.code
                        className={styles.attribute}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        checked
                      </motion.code>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div >

      {/* Checkboxes Section */}
      < motion.div className={styles.section} variants={itemVariants} >
        <motion.h4
          className={styles.sectionTitle}
          whileHover={{ color: '#10b981' }}
          transition={{ duration: 0.2 }}
        >
          Checkboxes
        </motion.h4>

        {/* HTML Code Sample */}
        <MarkdownCode
          content={checkboxCodeSample}
          language="html"
          title="HTML Code Sample"
          showLineNumbers={true}
          className={styles.codeSample}
        />

        <div className={styles.checkboxGroup}>
          {checkboxOptions.map((option) => (
            <motion.div
              key={option.id}
              className={styles.checkboxItem}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className={styles.checkboxContainer}
                variants={checkboxVariants}
                animate={checkboxes[option.id] ? 'checked' : 'unchecked'}
              >
                <input
                  type="checkbox"
                  id={option.id}
                  checked={checkboxes[option.id]}
                  onChange={() => handleCheckboxChange(option.id)}
                  className={styles.checkboxInput}
                />
                <motion.div
                  className={styles.checkboxMark}
                  initial={false}
                  animate={checkboxes[option.id] ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ✓
                </motion.div>
              </motion.div>
              <div className={styles.checkboxContent}>
                <motion.label
                  htmlFor={option.id}
                  className={styles.checkboxLabel}
                  variants={labelVariants}
                  animate={checkboxes[option.id] ? 'focused' : 'normal'}
                >
                  {option.label}
                </motion.label>
                <p className={styles.checkboxDescription}>{option.description}</p>

                {/* HTML Attributes Display */}
                <motion.div
                  className={styles.attributesContainer}
                  variants={attributesVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className={styles.attributesTitle}>HTML Attributes:</div>
                  <div className={styles.attributesList}>
                    <code className={styles.attribute}>
                      type=&quot;checkbox&quot;
                    </code>
                    <code className={styles.attribute}>
                      id={option.id}
                    </code>
                    {checkboxes[option.id] && (
                      <motion.code
                        className={styles.attribute}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        checked
                      </motion.code>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div >

      {/* Dropdown Section */}
      < motion.div className={styles.section} variants={itemVariants} >
        <motion.h4
          className={styles.sectionTitle}
          whileHover={{ color: '#8b5cf6' }}
          transition={{ duration: 0.2 }}
        >
          Dropdown Menu
        </motion.h4>

        {/* HTML Code Sample */}
        <MarkdownCode
          content={dropdownCodeSample}
          language="html"
          title="HTML Code Sample"
          showLineNumbers={true}
          className={styles.codeSample}
        />

        <div className={styles.dropdownContainer}>
          <motion.label
            className={styles.dropdownLabel}
            variants={labelVariants}
            animate={selectedDropdown ? 'focused' : 'normal'}
          >
            Select your favorite technology:
          </motion.label>
          <motion.select
            value={selectedDropdown}
            onChange={(e) => setSelectedDropdown(e.target.value)}
            className={styles.dropdown}
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {dropdownOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </motion.select>

          <AnimatePresence>
            {selectedDropdown && (
              <motion.div
                className={styles.selectedValue}
                initial="closed"
                animate="open"
                exit="closed"
                variants={dropdownVariants}
              >
                <span>You selected: </span>
                <strong>{dropdownOptions.find(opt => opt.value === selectedDropdown)?.label}</strong>
              </motion.div>
            )}
          </AnimatePresence>

          {/* HTML Attributes Display */}
          <motion.div
            className={styles.attributesContainer}
            variants={attributesVariants}
            initial="hidden"
            animate="visible"
          >
            <div className={styles.attributesTitle}>HTML Attributes:</div>
            <div className={styles.attributesList}>
              <code className={styles.attribute}>
                name=&quot;technology&quot;
              </code>
              <code className={styles.attribute}>
                id=&quot;tech-select&quot;
              </code>
              {selectedDropdown && (
                <motion.code
                  className={styles.attribute}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  value={selectedDropdown}
                </motion.code>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HtmlTags;
