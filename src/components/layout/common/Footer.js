import React from 'react'

export default function Footer() {
    return (
        <div>
             <footer
        id="index-footer-box"
        className="page-footer  footer-fixed indigo darken-3"
      >
        <div className="footer-copyright">
          <div className="container center">
            &copy; Copyright 2020&nbsp;{" "}
            <script type="text/javascript">
              document.write(new Date().getFullYear());
            </script>
            <a href="https://github.com/" className="white-text">
              BookMyMeal
            </a>
          </div>
        </div>
      </footer> 
        </div>
    )
}
