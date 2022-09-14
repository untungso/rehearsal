<h3 id="%E8%83%8C%E6%99%AF">
	<a class="header-anchor-link" href="#%E8%83%8C%E6%99%AF" aria-hidden="true">背景</a>
</h3>
<p>
	ls、cd、psなどのコマンド。
	いずれも30年前のもので、今でも毎日使っていますが、"オープンソースの世界には、これらの「古い」Linuxコマンドに代わり、より優れたコマンドラインツールがあるのだろうか？"と思いました。<br
	/>
	本記事では、Linuxのコマンドと同じことができるだけでなく、より使いやすいパラメータ、一目でわかる表示、クロスプラットフォーム対応など、使い方、パフォーマンス、表示の面でより優れた新機能を追加したオープンソースのコマンドラインツールを10個まとめてみました。
</p>
<h3 id="1.-dust%EF%BC%88du%EF%BC%89">
	<a class="header-anchor-link" href="#1.-dust%EF%BC%88du%EF%BC%89" aria-hidden="true">
		1. dust（du）</a
	>
</h3>
<p>
	<img
		src="https://res.cloudinary.com/zenn/image/fetch/s--L_kE2EEC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/d2675e74eda2d14504046c1d.png%3Fsha%3D5669bf220f5050d5b3e41fa9b5cba4514ebde957"
		alt="dust"
		loading="lazy"
		class="md-img"
		style="cursor: zoom-in;"
	/>
</p>
<ul>
	<li>開発言語： Rust</li>
	<li>
		Github： <a
			href="https://github.com/bootandy/dust"
			target="_blank"
			rel="nofollow noopener noreferrer">https://github.com/bootandy/dust</a
		>
	</li>
	<li>スター数： 4.4k</li>
	<li>代替コマンド： <code>du</code></li>
	<li>使用方法： <code>dust</code></li>
	<li>プラットフォーム： Windows、Linux、macOS</li>
	<li>
		説明: ディレクトリやファイルのサイズを一目でわかるように表示するコマンドラインツールです。
		追加パラメータなしで使用でき、カレントディレクトリ内のファイルやディレクトリのサイズ、サブディレクトリのリスト（ツリー）、容量の占有率（バーチャート）を表示することができます。
	</li>
</ul>
<h3 id="2.-bat%EF%BC%88cat%EF%BC%89">
	<a class="header-anchor-link" href="#2.-bat%EF%BC%88cat%EF%BC%89" aria-hidden="true">
		2. bat（cat）</a
	>
</h3>
<p>
	<img
		src="https://res.cloudinary.com/zenn/image/fetch/s--Os1k0m9K--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/8dd743e6f3e8af9f193ddecf.png%3Fsha%3Dff6a8a72d4dcbdceaed7d82b4f1a5e5ab0934bf4"
		alt="bat"
		loading="lazy"
		class="md-img"
		style="cursor: zoom-in;"
	/>
</p>
<ul>
	<li>開発言語： Rust</li>
	<li>
		Github： <a
			href="https://github.com/sharkdp/bat"
			target="_blank"
			rel="nofollow noopener noreferrer">https://github.com/sharkdp/bat</a
		>
	</li>
	<li>スター数： 36.9k</li>
	<li>代替コマンド： <code>cat</code></li>
	<li>使用方法：<code>bat &lt;ファイル名&gt;</code></li>
	<li>プラットフォーム： Windows、Linux、macOS</li>
	<li>
		説明: シンタックスハイライトと Git の統合を備えた catの代替コマンドです。
		シンタックスハイライトは、ファイルの拡張子から自動的に判断されます。
		また、Gitの統合機能を使用すると、Gitの差分を表示することができます。
	</li>
</ul>

<p>
	<img
		src="https://res.cloudinary.com/zenn/image/fetch/s--rGcKyxzY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/f567446101a1116174f09fdb.png%3Fsha%3D3803410d6735238f2bac8a860ab950e439b3c8bf"
		alt="exa"
		loading="lazy"
		class="md-img"
		style="cursor: zoom-in;"
	/>
</p>
<ul>
	<li>開発言語： Rust</li>
	<li>
		Github： <a
			href="https://github.com/ogham/exa"
			target="_blank"
			rel="nofollow noopener noreferrer">https://github.com/ogham/exa</a
		>
	</li>
	<li>スター数： 19.1k</li>
	<li>代替コマンド： <code>ls</code></li>
	<li>使用方法：<code>exa -l</code></li>
	<li>プラットフォーム： Windows、Linux、macOS</li>
	<li>
		説明: lsの代替コマンドで、より使いやすいパラメータを備えています。 例えば、<code>exa -l</code
		>とすると、ファイルの種類、所有者、サイズ、最終更新日時、ファイル名を表示することができます。
	</li>
</ul>

<p>
	<img
		src="https://raw.githubusercontent.com/sharkdp/fd/3e68733c94e555b27266670a97dc69022b419dea/doc/screencast.svg"
		alt="fd"
		loading="lazy"
		class="md-img"
		style="cursor: zoom-in;"
	/>
</p>
<ul>
	<li>開発言語： Rust</li>
	<li>
		Github： <a
			href="https://github.com/sharkdp/fd"
			target="_blank"
			rel="nofollow noopener noreferrer">https://github.com/sharkdp/fd</a
		>
	</li>
	<li>スター数： 24.4k</li>
	<li>代替コマンド： <code>find</code></li>
	<li>使用方法：<code>fd &lt;ファイル名&gt;</code></li>
	<li>プラットフォーム： Windows、Linux、macOS</li>
	<li>説明: fdは、シンプルで素早く、そしてユーザーフレンドリーなfindの代替コマンドです。</li>
</ul>

<p>
	<img
		src="https://res.cloudinary.com/zenn/image/fetch/s--WUq7JzBI--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/6049a4842c7753a38266dd2d.png%3Fsha%3D497e049199baaad078c75e4b64ea4c2e601df82e"
		alt="duf"
		loading="lazy"
		class="md-img"
		style="cursor: zoom-in;"
	/>
</p>
<ul>
	<li>開発言語： Go</li>
	<li>
		Github： <a
			href="https://github.com/muesli/duf"
			target="_blank"
			rel="nofollow noopener noreferrer">https://github.com/muesli/duf</a
		>
	</li>
	<li>スター数： 3.8k</li>
	<li>代替コマンド： <code>df</code></li>
	<li>使用方法：<code>duf</code></li>
	<li>プラットフォーム： Windows、Linux、macOS</li>
	<li>
		説明: dfの代替コマンド、ディスク使用量をカラー表で表示できます。
		デバイスの分類だけでなく、結果のソート、JSON出力も可能。
	</li>
</ul>

<p>
	<img
		src="https://res.cloudinary.com/zenn/image/fetch/s--niR3dRyU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/45df18ad398c4c9089618548.png%3Fsha%3D6c96649e0debfe0aa7d6ab23414cef1efd825918"
		alt="procs"
		loading="lazy"
		class="md-img"
		style="cursor: zoom-in;"
	/>
</p>
<ul>
	<li>開発言語： Rust</li>
	<li>
		Github：<a
			href="https://github.com/dalance/procs"
			target="_blank"
			rel="nofollow noopener noreferrer">https://github.com/dalance/procs</a
		>
	</li>
	<li>スター数： 3.2k</li>
	<li>代替コマンド： <code>ps</code></li>
	<li>使用方法：<code>procs</code></li>
	<li>プラットフォーム： Windows、Linux、macOS</li>
	<li>
		説明:
		プロセスが占有するTCP/UDPポートやDockerコンテナ名などの詳細情報を表示したり、カラムやキーワードでプロセスを簡単にフィルタリングできるコマンドラインのプロセス管理ツールです。
	</li>
</ul>

<p>
	<img
		src="https://res.cloudinary.com/zenn/image/fetch/s--FGodkexV--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/533c905ac91daacaba018cc5.png%3Fsha%3D364d1ca62dd62352dcd12ae5759d6c326bcdf3f3"
		alt="bottom"
		loading="lazy"
		class="md-img"
		style="cursor: zoom-in;"
	/>
</p>
<ul>
	<li>開発言語： Rust</li>
	<li>
		Github： <a
			href="https://github.com/ClementTsang/bottom"
			target="_blank"
			rel="nofollow noopener noreferrer">https://github.com/ClementTsang/bottom</a
		>
	</li>
	<li>スター数： 4.9k</li>
	<li>代替コマンド： <code>top</code></li>
	<li>使用方法：<code>bottom</code>, <code>btm</code></li>
	<li>プラットフォーム： Windows、Linux、macOS</li>
	<li>
		説明: プロセスやシステムリソースのグラフィカルなリアルタイム監視ツール。
		CPU、メモリ、ハードディスク、ネットワーク、プロセス、温度などの指標のリアルタイム表示をサポートするだけでなく、プラグインを介して可視化を拡張できます。
	</li>
</ul>

<p>
	<img
		src="https://raw.githubusercontent.com/ajeetdsouza/zoxide/main/contrib/tutorial.webp"
		alt="zoxide"
		loading="lazy"
		class="md-img"
		style="cursor: zoom-in;"
	/>
</p>
<ul>
	<li>開発言語： Rust</li>
	<li>
		Github： <a
			href="https://github.com/ajeetdsouza/zoxide"
			target="_blank"
			rel="nofollow noopener noreferrer">https://github.com/ajeetdsouza/zoxide</a
		>
	</li>
	<li>スター数： 7.5k</li>
	<li>代替コマンド： <code>cd</code></li>
	<li>使用方法：<code>z &lt;ディレクトリ名&gt;</code></li>
	<li>プラットフォーム： Windows、Linux、macOS</li>
	<li>
		説明:
		zoxideはよく使うディレクトリを記憶しておくことで、ディレクトリホッピングをより簡単に、より速く行うことができます。
	</li>
</ul>

<p>
	<img
		src="https://res.cloudinary.com/zenn/image/fetch/s--OdtuJjnz--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/a4a11555fbe8fd16dcdd09d3.png%3Fsha%3D2cd81c7ec29a9a365ed4d8c1ac3768b897470609"
		alt="ripgrep"
		loading="lazy"
		class="md-img"
		style="cursor: zoom-in;"
	/>
</p>
<ul>
	<li>開発言語： Rust</li>
	<li>
		Github： <a
			href="https://github.com/BurntSushi/ripgrep"
			target="_blank"
			rel="nofollow noopener noreferrer">https://github.com/BurntSushi/ripgrep</a
		>
	</li>
	<li>スター数： 33.1k</li>
	<li>代替コマンド： <code>grep</code></li>
	<li>使用方法：<code>rg &lt;検索文字列&gt; &lt;検索対象ディレクトリ&gt;</code></li>
	<li>プラットフォーム： Windows、Linux、macOS</li>
	<li>
		説明: 超高速テキスト検索ツール。
		高速なだけでなく、.gitignoreにあるファイルをPASS、自動的に再帰的に検索、マッチした結果を自動的にハイライト表示するなどの機能を備え、より使いやすくなっています。
	</li>
</ul>

<p>
	<img
		src="https://res.cloudinary.com/zenn/image/fetch/s--tXpZmfYi--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_1200/https://storage.googleapis.com/zenn-user-upload/deployed-images/bc7bc74b2dda73544e7dec58.png%3Fsha%3D7a52a0f341d57d2736c515c95c19e50c2fef571b"
		alt="httpie"
		loading="lazy"
		class="md-img"
		style="cursor: zoom-in;"
	/>
</p>
<ul>
	<li>開発言語： Python</li>
	<li>
		Github： <a
			href="https://github.com/httpie/httpie"
			target="_blank"
			rel="nofollow noopener noreferrer">https://github.com/httpie/httpie</a
		>
	</li>
	<li>スター数： 23.6k</li>
	<li>代替コマンド： <code>curl</code></li>
	<li>使用方法：<code>http/https &lt;URL&gt;</code></li>
	<li>プラットフォーム： Windows、Linux、macOS</li>
	<li>
		説明: curlの代替コマンド。
		リクエスト、セッション、ダウンロード、JSONなどをサポートし、非常に使いやすくなっています。
		このプロジェクトは、スタークリア事件を乗り越え、1年も経たないうちに、スターが2万個を超えました。
	</li>
</ul>
