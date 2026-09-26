const CONFIG_PATH = "config/site.json";


/* =========================
   CONFIG
   ========================= */

let siteConfig = null;


/* =========================
   LOAD CONFIG
   ========================= */

async function loadConfig() {

  try {

    const response =
      await fetch(CONFIG_PATH);

    if (!response.ok) {

      throw new Error(
        "Could not load site.json"
      );

    }

    siteConfig =
      await response.json();

    initializeSite();

  } catch (error) {

    console.error(
      "LathSMP config error:",
      error
    );

  }

}


/* =========================
   INITIALIZE
   ========================= */

function initializeSite() {

  setupNavigation();
  setupFooter();
  setupPage();

}


/* =========================
   NAVIGATION
   ========================= */

function setupNavigation() {

  const nav =
    document.querySelector("nav");

  if (
    !nav ||
    !siteConfig.navigation
  ) {

    return;

  }

  nav.innerHTML = "";

  siteConfig.navigation.forEach(item => {

    const link =
      document.createElement("a");

    link.href =
      item.url;

    link.textContent =
      item.name;

    nav.appendChild(link);

  });

}


/* =========================
   FOOTER
   ========================= */

function setupFooter() {

  const copyright =
    document.querySelector(
      "#footerCopyright"
    );

  const domain =
    document.querySelector(
      "#footerDomain"
    );


  if (copyright) {

    copyright.textContent =
      siteConfig.footer.copyright;

  }


  if (domain) {

    domain.textContent =
      siteConfig.footer.domain;

  }

}


/* =========================
   PAGE DETECTION
   ========================= */

function setupPage() {

  const page =
    document.body.dataset.page;

  if (!page) {

    return;

  }


  switch (page) {

    case "home":
      setupHome();
      break;

    case "server":
      setupServer();
      break;

    case "updates":
      setupUpdates();
      break;

    case "youtube":
      setupYouTube();
      break;

    case "socials":
      setupSocials();
      break;

    case "about":
      setupAbout();
      break;

  }

}


/* =========================
   HELPERS
   ========================= */

function setText(selector, text) {

  const element =
    document.querySelector(selector);

  if (
    element &&
    text !== undefined &&
    text !== null
  ) {

    element.textContent =
      text;

  }

}


function setLink(selector, url) {

  const element =
    document.querySelector(selector);

  if (
    element &&
    url
  ) {

    element.href =
      url;

  }

}


function setImage(selector, src, alt = "") {

  const element =
    document.querySelector(selector);

  if (
    !element ||
    !src
  ) {

    return;

  }

  element.src =
    src;

  if (alt) {

    element.alt =
      alt;

  }

}


/* =========================
   HOME
   ========================= */

function setupHome() {

  const home =
    siteConfig.home;

  const site =
    siteConfig.site;


  /* ---------- INTRO ---------- */

  setText(
    "#homeTitle",
    home.title
  );

  setText(
    "#homeDescription",
    home.description
  );

  setText(
    "#homeDescription2",
    home.description2
  );

  setText(
    "#homeServerInfoButton",
    home.serverInfoLink
  );


  /* ---------- SERVER ---------- */

  setText(
    "#homeServerSectionTitle",
    home.serverSectionTitle
  );

  setText(
    "#homeServerStatusTitle",
    home.serverStatusTitle
  );

  setText(
    "#homeServerStatus",
    home.serverStatusChecking
  );

  setText(
    "#homePlayersLabel",
    home.playersLabel
  );

  setText(
    "#homePlayers",
    home.playersLoading
  );

  setText(
    "#homeVersionLabel",
    home.versionLabel
  );

  setText(
    "#homePlatformLabel",
    home.platformLabel
  );

  setText(
    "#homeServerIpLabel",
    home.serverIpLabel
  );

  setText(
    "#homeCopyButton",
    home.copyButton
  );

  setText(
    "#homeCopyMessage",
    home.copyMessage
  );

  setText(
    "#homeServerInfoLink",
    home.serverInfoLinkText
  );


  /* ---------- SERVER VALUES ---------- */

  setText(
    "#homeServerIp",
    site.serverIp
  );

  setText(
    "#homeLargeIp",
    site.serverIp
  );

  setText(
    "#homeVersion",
    site.minecraftVersion
  );

  setText(
    "#homePlatform",
    site.platform
  );


  /* ---------- FEATURES ---------- */

  setText(
    "#homeFeaturesTitle",
    home.featuresTitle
  );

  setText(
    "#homeFeaturesLink",
    home.featuresLink
  );


  const features =
    document.querySelector(
      "#homeFeatures"
    );


  if (
    features &&
    Array.isArray(home.features)
  ) {

    features.innerHTML = "";

    home.features.forEach(feature => {

      const li =
        document.createElement("li");

      li.textContent =
        feature;

      features.appendChild(li);

    });

  }


  /* ---------- LATEST UPDATE ---------- */

  setText(
    "#homeLatestUpdateTitle",
    home.latestUpdateTitle
  );

  setText(
    "#homeLatestUpdateDate",
    home.latestUpdateDate
  );

  setText(
    "#homeLatestUpdatePostTitle",
    home.latestUpdateTitleText
  );

  setText(
    "#homeLatestUpdateDescription",
    home.latestUpdateDescription
  );

  setText(
    "#homeLatestUpdateLink",
    home.latestUpdateLink
  );


  /*
   * IMPORTANT:
   *
   * Only change the image if
   * site.json actually contains
   * an image path.
   *
   * This prevents the image from
   * disappearing when the value
   * is missing.
   */

  if (home.latestUpdateImage) {

    setImage(
      "#homeLatestUpdateImage",
      home.latestUpdateImage,
      home.latestUpdateTitleText ||
      "Latest LathSMP update"
    );

  }


  /* ---------- COMMUNITY ---------- */

  setText(
    "#homeCommunityTitle",
    home.communityTitle
  );

  setText(
    "#homeCommunityDescription",
    home.communityDescription
  );


  /* ---------- DISCORD ---------- */

  setText(
    "#homeDiscordTitle",
    home.discordTitle
  );

  setText(
    "#homeDiscordDescription",
    home.discordDescription
  );


  /*
   * The HTML uses homeDiscordLink
   * for the actual button.
   */

  setText(
    "#homeDiscordLink",
    home.discordButton
  );

  setLink(
    "#homeDiscordLink",
    home.discordUrl
  );


  if (home.discordImage) {

    setImage(
      "#homeDiscordImage",
      home.discordImage,
      home.discordTitle || "Discord"
    );

  }


  /* ---------- YOUTUBE ---------- */

  setText(
    "#homeYouTubeTitle",
    home.youtubeTitle
  );

  setText(
    "#homeYouTubeDescription",
    home.youtubeDescription
  );


  /*
   * The HTML uses homeYouTubeLink
   * for the actual button.
   */

  setText(
    "#homeYouTubeLink",
    home.youtubeButton
  );

  setLink(
    "#homeYouTubeLink",
    home.youtubeUrl
  );


  if (home.youtubeImage) {

    setImage(
      "#homeYouTubeImage",
      home.youtubeImage,
      home.youtubeTitle || "YouTube"
    );

  }


  /* ---------- MORE SOCIALS ---------- */

  setText(
    "#homeSocialsTitle",
    home.socialsTitle
  );

  setText(
    "#homeSocialsDescription",
    home.socialsDescription
  );

  setText(
    "#homeSocialsLink",
    home.socialsLink
  );


  /* ---------- JOIN ---------- */

  setText(
    "#homeJoinTitle",
    home.joinTitle
  );

  setText(
    "#homeJoinDescription",
    home.joinDescription
  );

  setText(
    "#homeJoinVersion",
    home.joinVersion
  );

  setText(
    "#homeJoinCopyMessage",
    home.joinCopyMessage
  );


  /* ---------- COPY ---------- */

  setupCopyButtons();


  /* ---------- SERVER STATUS ---------- */

  setupServerStatus(
    "#homeServerStatus",
    "#homePlayers"
  );

}


/* =========================
   SERVER
   ========================= */

function setupServer() {

  const server =
    siteConfig.server;

  const site =
    siteConfig.site;


  setText(
    "#serverTitle",
    server.title
  );

  setText(
    "#serverDescription",
    server.description
  );

  setText(
    "#serverStatusChecking",
    server.serverStatusChecking
  );

  setText(
    "#serverPlayersLabel",
    server.playersLabel
  );

  setText(
    "#serverPlayers",
    server.playersLoading
  );

  setText(
    "#serverVersionLabel",
    server.versionLabel
  );

  setText(
    "#serverPlatformLabel",
    server.platformLabel
  );

  setText(
    "#serverIpLabel",
    server.serverIpLabel
  );

  setText(
    "#serverCopyButton",
    server.copyButton
  );

  setText(
    "#serverCopyMessage",
    server.copyMessage
  );

  setText(
    "#serverHowToJoinTitle",
    server.howToJoinTitle
  );

  setText(
    "#serverHowToJoinText",
    server.howToJoinText
  );

  setText(
    "#serverFeaturesTitle",
    server.featuresTitle
  );

  setText(
    "#serverUniqueTitle",
    server.uniqueTitle
  );

  setText(
    "#serverNoClaimsTitle",
    server.noClaimsTitle
  );

  setText(
    "#serverNoClaimsText",
    server.noClaimsText
  );

  setText(
    "#serverJoinTitle",
    server.joinTitle
  );

  setText(
    "#serverJoinDescription",
    server.joinDescription
  );

  setText(
    "#serverJoinVersion",
    server.joinVersion
  );

  setText(
    "#serverJoinCopyMessage",
    server.joinCopyMessage
  );


  /* ---------- SERVER VALUES ---------- */

  setText(
    "#serverIp",
    site.serverIp
  );

  setText(
    "#serverLargeIp",
    site.serverIp
  );

  setText(
    "#serverVersion",
    site.minecraftVersion
  );

  setText(
    "#serverPlatform",
    site.platform
  );


  /* ---------- FEATURES ---------- */

  const features =
    document.querySelector(
      "#serverFeatures"
    );


  if (
    features &&
    Array.isArray(server.features)
  ) {

    features.innerHTML = "";

    server.features.forEach(feature => {

      const li =
        document.createElement("li");

      li.textContent =
        feature;

      features.appendChild(li);

    });

  }


  /* ---------- UNIQUE FEATURES ---------- */

  const uniqueFeatures =
    document.querySelector(
      "#serverUniqueFeatures"
    );


  if (
    uniqueFeatures &&
    Array.isArray(server.uniqueFeatures)
  ) {

    uniqueFeatures.innerHTML = "";

    server.uniqueFeatures.forEach(feature => {

      const item =
        document.createElement("div");

      item.className =
        "feature-item";


      const title =
        document.createElement("h3");

      title.textContent =
        feature.title;


      const description =
        document.createElement("p");

      description.textContent =
        feature.description;


      const status =
        document.createElement("small");

      status.textContent =
        feature.status;


      item.appendChild(title);
      item.appendChild(description);
      item.appendChild(status);

      uniqueFeatures.appendChild(item);

    });

  }


  setupCopyButtons();

  setupServerStatus(
    "#serverStatus",
    "#serverPlayers"
  );

}


/* =========================
   UPDATES
   ========================= */

function setupUpdates() {

  const updates =
    siteConfig.updates;


  setText(
    "#updatesTitle",
    updates.title
  );

  setText(
    "#updatesDescription",
    updates.description
  );

  setText(
    "#updatesMoreTitle",
    updates.moreTitle
  );

  setText(
    "#updatesMoreText",
    updates.moreText
  );


  const posts =
    document.querySelector(
      "#updatesList"
    );


  if (!posts) {

    return;

  }


  posts.innerHTML = "";


  if (
    !Array.isArray(updates.posts)
  ) {

    return;

  }


  updates.posts.forEach(post => {

    const article =
      document.createElement("article");

    article.className =
      "update-page-post";


    const imageContainer =
      document.createElement("div");

    imageContainer.className =
      "update-page-image";


    const image =
      document.createElement("img");

    image.src =
      post.image;

    image.alt =
      post.title;


    imageContainer.appendChild(
      image
    );


    const content =
      document.createElement("div");

    content.className =
      "update-page-content";


    const date =
      document.createElement("small");

    date.textContent =
      post.date;


    const title =
      document.createElement("h2");

    title.textContent =
      post.title;


    const description =
      document.createElement("p");

    description.textContent =
      post.description;


    content.appendChild(date);
    content.appendChild(title);
    content.appendChild(description);


    article.appendChild(
      imageContainer
    );

    article.appendChild(
      content
    );


    posts.appendChild(
      article
    );

  });

}


/* =========================
   YOUTUBE
   ========================= */

function setupYouTube() {

  const youtube =
    siteConfig.youtube;


  setText(
    "#youtubeTitle",
    youtube.title
  );

  setText(
    "#youtubeDescription",
    youtube.description
  );

  setText(
    "#youtubeChannelName",
    youtube.channelName
  );

  setText(
    "#youtubeChannelButton",
    youtube.channelButton
  );

  setText(
    "#youtubeContentTitle",
    youtube.contentTitle
  );

  setText(
    "#youtubeFutureTitle",
    youtube.futureTitle
  );

  setText(
    "#youtubeFutureText",
    youtube.futureText
  );


  setLink(
    "#youtubeChannelLink",
    youtube.channelUrl
  );


  const content =
    document.querySelector(
      "#youtubeContent"
    );


  if (
    content &&
    Array.isArray(youtube.content)
  ) {

    content.innerHTML = "";

    youtube.content.forEach(item => {

      const li =
        document.createElement("li");

      li.textContent =
        item;

      content.appendChild(li);

    });

  }

}


/* =========================
   SOCIALS
   ========================= */

function setupSocials() {

  const socials =
    siteConfig.socials;

  const site =
    siteConfig.site;


  setText(
    "#socialsTitle",
    socials.title
  );

  setText(
    "#socialsDescription",
    socials.description
  );

  setText(
    "#socialsFindTitle",
    socials.findTitle
  );

  setText(
    "#socialsServerTitle",
    socials.serverTitle
  );

  setText(
    "#socialsServerDescription",
    socials.serverDescription
  );

  setText(
    "#socialsServerAddressLabel",
    socials.serverAddressLabel
  );

  setText(
    "#socialsServerAddress",
    site.serverIp
  );

  setText(
    "#socialsServerVersion",
    socials.serverVersion
  );

  setText(
    "#socialsMoreTitle",
    socials.moreTitle
  );

  setText(
    "#socialsMoreText",
    socials.moreText
  );


  const list =
    document.querySelector(
      "#socialsList"
    );


  if (!list) {

    return;

  }


  list.innerHTML = "";


  if (
    !Array.isArray(socials.links)
  ) {

    return;

  }


  socials.links.forEach(link => {

    const item =
      document.createElement("a");

    item.className =
      "social-page-item";

    item.href =
      link.url;

    item.target =
      "_blank";

    item.rel =
      "noopener";


    const icon =
      document.createElement("div");

    icon.className =
      "social-page-icon";


    if (link.image) {

      const image =
        document.createElement("img");

      image.src =
        link.image;

      image.alt =
        link.name;

      icon.appendChild(image);

    } else {

      icon.textContent =
        link.name;

    }


    const content =
      document.createElement("div");

    content.className =
      "social-page-content";


    const name =
      document.createElement("strong");

    name.textContent =
      link.name;


    const description =
      document.createElement("span");

    description.textContent =
      link.description;


    content.appendChild(name);
    content.appendChild(description);


    const arrow =
      document.createElement("span");

    arrow.className =
      "social-page-arrow";

    arrow.textContent =
      "→";


    item.appendChild(icon);
    item.appendChild(content);
    item.appendChild(arrow);


    list.appendChild(item);

  });

}


/* =========================
   ABOUT
   ========================= */

function setupAbout() {

  const about =
    siteConfig.about;


  setText(
    "#aboutTitle",
    about.title
  );

  setText(
    "#aboutDescription",
    about.description
  );

  setText(
    "#aboutWhyTitle",
    about.whyTitle
  );

  setText(
    "#aboutWhyText",
    about.whyText
  );

  setText(
    "#aboutSystemsTitle",
    about.systemsTitle
  );

  setText(
    "#aboutFutureTitle",
    about.futureTitle
  );

  setText(
    "#aboutCreatorTitle",
    about.creatorTitle
  );

  setText(
    "#aboutCreatorText",
    about.creatorText
  );

  setText(
    "#aboutYoutubeButton",
    about.youtubeButton
  );


  setLink(
    "#aboutYoutubeLink",
    about.youtubeLink
  );


  const systems =
    document.querySelector(
      "#aboutSystems"
    );


  if (
    systems &&
    Array.isArray(about.systems)
  ) {

    systems.innerHTML = "";

    about.systems.forEach(item => {

      const li =
        document.createElement("li");

      li.textContent =
        item;

      systems.appendChild(li);

    });

  }


  const future =
    document.querySelector(
      "#aboutFuture"
    );


  if (
    future &&
    Array.isArray(about.future)
  ) {

    future.innerHTML = "";

    about.future.forEach(item => {

      const li =
        document.createElement("li");

      li.textContent =
        item;

      future.appendChild(li);

    });

  }

}


/* =========================
   COPY IP
   ========================= */

function setupCopyButtons() {

  const buttons =
    document.querySelectorAll(
      "[data-copy-ip]"
    );


  buttons.forEach(button => {

    /*
     * Prevent adding multiple
     * click listeners if this
     * function gets called again.
     */

    if (
      button.dataset.copyReady === "true"
    ) {

      return;

    }

    button.dataset.copyReady =
      "true";


    button.addEventListener(
      "click",
      async () => {

        try {

          await navigator.clipboard.writeText(
            siteConfig.site.serverIp
          );


          const message =
            button.parentElement
              ?.querySelector(
                ".copy-message"
              );


          if (message) {

            message.textContent =
              "Copied!";

          }

        } catch (error) {

          console.error(
            "Could not copy server IP:",
            error
          );

        }

      }
    );

  });

}


/* =========================
   SERVER STATUS
   ========================= */

async function setupServerStatus(
  statusSelector,
  playersSelector
) {

  const status =
    document.querySelector(
      statusSelector
    );

  const players =
    document.querySelector(
      playersSelector
    );


  if (
    !status ||
    !players
  ) {

    return;

  }


  /*
   * Server status API will be
   * connected here later.
   *
   * For now the values from
   * site.json remain visible.
   */

}


/* =========================
   START
   ========================= */

loadConfig();
