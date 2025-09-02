import ToggleComponent from '@/components/ToggleComponent';
import styles from './toggle-demo.module.css';

export default function ToggleDemoPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Toggle Component Demo</h1>
        <p className={styles.description}>
          A flexible toggle component that can show/hide content with smooth animations.
        </p>

        <section className={styles.section}>
          <h2>Basic Toggle</h2>
          <ToggleComponent>
            <p>This is the basic toggle content. Click the button above to show/hide this text.</p>
            <p>You can put any content here - paragraphs, images, forms, or other components.</p>
          </ToggleComponent>
        </section>

        <section className={styles.section}>
          <h2>Toggle with Custom Text</h2>
          <ToggleComponent
            toggleText={{ show: 'Expand Details', hide: 'Collapse Details' }}
            defaultVisible={true}
          >
            <div>
              <h3>Detailed Information</h3>
              <p>This toggle starts expanded and uses custom button text.</p>
              <ul>
                <li>Custom show/hide text</li>
                <li>Starts visible by default</li>
                <li>Smooth animations</li>
              </ul>
            </div>
          </ToggleComponent>
        </section>

        <section className={styles.section}>
          <h2>Minimal Style Toggle</h2>
          <ToggleComponent
            className="minimal"
            toggleText={{ show: 'Read More', hide: 'Read Less' }}
          >
            <p>This toggle uses the minimal styling variant with a subtle design.</p>
            <p>Perfect for inline content that needs to be expandable without drawing too much attention.</p>
          </ToggleComponent>
        </section>

        <section className={styles.section}>
          <h2>Compact Toggle</h2>
          <ToggleComponent
            className="compact"
            toggleText={{ show: 'Show Code', hide: 'Hide Code' }}
          >
            <pre className={styles.codeBlock}>
              {`function example() {
  console.log("This is a code example");
  return "Hello World";
}`}
            </pre>
          </ToggleComponent>
        </section>

        <section className={styles.section}>
          <h2>Toggle with Complex Content</h2>
          <ToggleComponent
            toggleText={{ show: 'View Form', hide: 'Hide Form' }}
          >
            <form className={styles.demoForm}>
              <h3>Contact Form</h3>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message:</label>
                <textarea id="message" placeholder="Enter your message" rows="3"></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
          </ToggleComponent>
        </section>

        <section className={styles.section}>
          <h2>Toggle Without Button</h2>
          <ToggleComponent showToggleButton={false} defaultVisible={true}>
            <p>This toggle has no button and is always visible. Useful for conditional rendering based on props or state.</p>
          </ToggleComponent>
        </section>

        <section className={styles.features}>
          <h2>Features</h2>
          <ul>
            <li><strong>Accessibility:</strong> Proper ARIA attributes and keyboard navigation</li>
            <li><strong>Animations:</strong> Smooth show/hide transitions using Framer Motion</li>
            <li><strong>Customizable:</strong> Custom text, styling variants, and default state</li>
            <li><strong>Responsive:</strong> Mobile-friendly design with responsive breakpoints</li>
            <li><strong>Flexible:</strong> Can contain any type of content</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
