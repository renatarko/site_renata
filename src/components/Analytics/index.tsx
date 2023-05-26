const Analytics = () => (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=G-51GJLR30MC`}></script>
  
    <script dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', G-51GJLR30MC, {
          page_path: window.location.pathname
        });
      `
     }}>
    </script>
  </>
)

export default Analytics;