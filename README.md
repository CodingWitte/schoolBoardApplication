<h1>CodingWitte</h1><br>
<p>The aplication schoolBoardApplication can serve as an information screen which runs on html css especialy for school using iserv or for companies using a kind of server system this can be usefull. The application allowes the user to change texts and images aswell as fontsizes. To change the basic html layout html nolege is required</p>
<h2>Dependencies</h2><br>
<h3>Node.js</h3>
<p>This application requires the installation of node.js and its modeules. Futhermore the installation of the node_modules is required for the file write.js run '<strong>npm install --production</strong>' for that. To reduce the size run '<strong>npm prune</strong>'</p>

<h3>nw.js</h3>
<p>nw.js is used to 'build' the application it can be installed via <a href="https://nwjs.io">nwjs</a>. The files aswell as the location folder than must be merged with the projects folder (the folder containing the html,css,js files).Afterwards the user can click the file: nw.exe in the folder and the app should automaticly start.</p><p>The uploaded files already contain a package.json asswell as a package-lock.json. These files are required to start the application via nwjs.</p><br>
<h2>Ease of use</h2><br>
<p>I recommand the use of a batch file (.bat) on windows to seperate the folders the files for nwjs go into a fulder called <strong>runtime</strong> the folders like package.json and package-lock.json and the node_modules folder go into a folder called <strong>app</strong>:</p>
<strong><p>@echo off <br> start "" "runtime\nw.exe" "app"</p></strong><br>
<h3>Recomanded folder structure</h3>
<p>project <br>
&nbsp;&nbsp;&nbsp;&nbsp;runtime <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nw.exe <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.dll <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; .... <br>
&nbsp;&nbsp;&nbsp;&nbsp;app <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; package.json <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; index.html <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; .... <br>
</p>
