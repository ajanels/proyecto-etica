
        function showContent(moduleId) {
            const contents = document.querySelectorAll('.module-content');
            contents.forEach(content => content.classList.remove('active'));

            const activeContent = document.getElementById(moduleId);
            activeContent.classList.add('active');
        }


        function showContent(moduleId) {
            const contents = document.querySelectorAll('.module-content-andony1');
            contents.forEach(content => content.classList.remove('active'));

            const activeContent = document.getElementById(moduleId);
            activeContent.classList.add('active');
        }
  