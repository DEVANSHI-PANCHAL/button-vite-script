export function Button() {
    const button = document.createElement('button');
    button.innerText = 'Click me';
    button.addEventListener('click', () => {
      alert('Button clicked!');
    });
    return button;
  }
  