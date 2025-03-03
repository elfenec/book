<script>
  MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      processEscapes: true
    },
    svg: {
      fontCache: 'global'
    }
  };

  document.addEventListener("DOMContentLoaded", function() {
    if (window.MathJax) {
      MathJax.typesetPromise();
    }
  });
</script>
