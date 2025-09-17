// Data for the notecards
const notecardData = {
    1: [
        { term: "Authentication, Authorization, and Accounting (AAA)", definition: "A system that checks who you are, what you can do, and records what you do." },
        { term: "Authentication, Authorization, Accounting, and Auditing (AAAA)", definition: "Same as AAA, but also checks logs for mistakes or abuse." },
        { term: "Access Control List (ACL)", definition: "A list that controls who is allowed to use or change something." },
        { term: "Automatic Document Feeder (ADF)", definition: "A printer/scanner part that pulls in many pages on its own." },
        { term: "Advanced Encryption Standard (AES)", definition: "A strong way to lock data so hackers can’t read it." },
        { term: "Advanced Micro Devices, Inc. (AMD)", definition: "A company that makes processors and graphics cards." },
        { term: "Apple File System (APFS)", definition: "The way Apple devices organize and protect files." },
        { term: "Automatic Private Internet Protocol Addressing (APIPA)", definition: "A backup system that gives a computer an IP when none is available." },
        { term: "Advanced RISC Machine (ARM)", definition: "A low-power chip design often used in phones and tablets." },
        { term: "Advanced Technology Extended (ATX)", definition: "A standard size and layout for desktop computer motherboards." },
        { term: "Business Email Compromise (BEC)", definition: "A scam that tricks people into sending money or data through fake emails." },
        { term: "Basic Input/Output System (BIOS)", definition: "Startup software that helps a computer turn on and load the operating system." }
    ],
    2: [
        { term: "Blue Screen of Death (BSOD)", definition: "A crash screen in Windows showing a serious error." },
        { term: "Bring Your Own Device (BYOD)", definition: "When employees or students use personal devices for work or school." },
        { term: "Calling-card Authorization Computer (CAC)", definition: "A system that checks and allows prepaid phone card calls." },
        { term: "Common Internet File System (CIFS)", definition: "A way computers share files over a network." },
        { term: "Configuration Management Database (CMDB)", definition: "A database that tracks IT systems and their details." },
        { term: "Canonical Name (CNAME)", definition: "A type of DNS record that points one website name to another." },
        { term: "Central Processing Unit (CPU)", definition: "The main chip that runs instructions in a computer." },
        { term: "Serial Communications", definition: "Sending data one bit at a time in a line." },
        { term: "Distributed Denial of Service (DDoS)", definition: "An attack that floods a website or server with too much traffic." },
        { term: "Double Data Rate (DDR)", definition: "A faster type of computer memory (RAM)." },
        { term: "Dynamic Host Configuration Protocol (DHCP)", definition: "A system that gives devices IP addresses automatically." },
        { term: "Dual In-line Memory Module (DIMM)", definition: "A stick of RAM used in desktops and servers." }
    ],
    3: [
        { term: "DomainKeys Identified Mail (DKIM)", definition: "An email security tool that verifies a message really came from the sender." },
        { term: "Data Loss Prevention (DLP)", definition: "Tools that stop sensitive data from leaving a company." },
        { term: "Domain-based Message Authentication, Reporting, and Conformance (DMARC)", definition: "A rule set that blocks fake emails from being delivered." },
        { term: "Domain Name System (DNS)", definition: "The “phonebook” that changes website names into IP addresses." },
        { term: "Denial of Service (DoS)", definition: "An attack that overloads a system so it can’t respond." },
        { term: "Digital Rights Management (DRM)", definition: "Technology that controls how digital media (like movies or music) can be used." },
        { term: "Digital Subscriber Line (DSL)", definition: "A type of internet connection that uses phone lines." },
        { term: "Digital Visual Interface (DVI)", definition: "A connector for video from a computer to a monitor." },
        { term: "Error-correcting Code (ECC)", definition: "Special memory that can fix data errors automatically." },
        { term: "Endpoint Detection and Response (EDR)", definition: "Security software that watches computers for threats." },
        { term: "Encrypting File System (EFS)", definition: "A Windows feature that locks files so only the right user can read them." },
        { term: "End-of-life (EOL)", definition: "When a product is no longer supported or updated." }
    ],
    4: [
        { term: "External Serial Advanced Technology Attachment (eSATA)", definition: "A connection for attaching external storage devices like hard drives." },
        { term: "Electrostatic Discharge (ESD)", definition: "A sudden spark of static electricity that can damage electronics." },
        { term: "End-user License Agreement (EULA)", definition: "The legal rules you agree to when installing software." },
        { term: "Extended File Allocation Table (exFAT)", definition: "A file system used for flash drives that handles larger files than FAT32." },
        { term: "32-bit File Allocation Table (FAT32)", definition: "An older file system used on drives that works with many devices but has size limits." },
        { term: "Facial Recognition Technology (FRT)", definition: "A system that identifies people by scanning their face." },
        { term: "File Transfer Protocol (FTP)", definition: "A way to move files between computers over a network." },
        { term: "Grandfather-Father-Son (Backup)", definition: "A backup method that keeps old, middle, and new copies of data." },
        { term: "Global Positioning System (GPS)", definition: "A satellite system that shows your location on Earth." },
        { term: "GUID Partition Table (GPT)", definition: "A modern way of storing partition information on a hard drive." },
        { term: "Globally Unique Identifier (GUID)", definition: "A special number that uniquely identifies something in a computer system." },
        { term: "Hard Disk Drive (HDD)", definition: "A storage device that saves data on spinning magnetic disks." }
    ],
    5: [
        { term: "High-definition Multimedia Interface (HDMI)", definition: "A cable that carries high-quality video and sound." },
        { term: "Hardware Security Module (HSM)", definition: "A physical device that safely stores digital keys and passwords." },
        { term: "Hypertext Transfer Protocol (HTTP)", definition: "The basic system for loading web pages." },
        { term: "Hypertext Transfer Protocol Secure (HTTPS)", definition: "A safer version of HTTP that encrypts web traffic." },
        { term: "Infrastructure as a Service (IaaS)", definition: "Renting computer resources like servers and storage from the cloud." },
        { term: "Identity and Access Management (IAM)", definition: "Tools that control who can log in and what they can do." },
        { term: "Internet Mail Access Protocol (IMAP)", definition: "A way to read emails that keeps messages stored on the server." },
        { term: "Input/Output Operations Per Second (IOPS)", definition: "A measure of how fast a storage device can read and write data." },
        { term: "Internet of Things (IoT)", definition: "Everyday devices connected to the internet, like smart lights or thermostats." },
        { term: "Internet Protocol (IP)", definition: "The rules for addressing and sending data across the internet." },
        { term: "In-plane Switching (IPS)", definition: "A type of LCD screen that shows better colors and viewing angles." },
        { term: "International Organization for Standardization (ISO)", definition: "A group that sets worldwide technical standards." }
    ],
    6: [
        { term: "Information Technology eXtended (ITX)", definition: "A smaller design standard for motherboards compared to ATX." },
        { term: "Keyboard-Video-Mouse (KVM)", definition: "A switch that lets you control multiple computers with one keyboard, mouse, and monitor." },
        { term: "Local Area Network (LAN)", definition: "A network that connects devices in a small area like a home or school." },
        { term: "Lucent Connector (LC)", definition: "A small connector used with fiber optic cables." },
        { term: "Liquid Crystal Display (LCD)", definition: "A flat-screen technology used in monitors and TVs." },
        { term: "Lightweight Directory Access Protocol (LDAP)", definition: "A system that stores and looks up information like usernames and passwords." },
        { term: "Light-emitting Diode (LED)", definition: "A small, energy-efficient light source used in screens and electronics." },
        { term: "Physical Media Access Control (MAC)", definition: "The part of networking that controls how devices share a connection." },
        { term: "Metropolitan Area Network (MAN)", definition: "A network that covers a city or large campus." },
        { term: "Master Boot Record (MBR)", definition: "An older way of storing partition and boot data on a drive." },
        { term: "Mobile Device Management (MDM)", definition: "Software that controls and protects phones and tablets in a company or school." },
        { term: "Managed Detection and Response (MDR)", definition: "A security service where experts watch and respond to threats." }
    ],
    7: [
        { term: "Multifactor Authentication (MFA)", definition: "Logging in using more than one proof, like a password plus a code on your phone." },
        { term: "Microsoft Management Console (MMC)", definition: "A Windows tool that lets admins manage computer settings and services." },
        { term: "Mutual Non-disclosure Agreement (MNDA)", definition: "A legal promise between two groups to keep shared information secret." },
        { term: "Mini-serial Advanced Technology Attachment (mSATA)", definition: "A small connector for solid-state drives (SSDs)." },
        { term: "Material Safety Data Sheet (MSDS)", definition: "A document with safety instructions for handling chemicals or electronics." },
        { term: "Mail Exchange (MX) Record", definition: "A DNS record that directs email to the right mail server." },
        { term: "Non-disclosure Agreement (NDA)", definition: "A legal promise not to share private information." },
        { term: "Network Basic Input/Output System (NetBIOS)", definition: "An older way for computers on a local network to talk to each other." },
        { term: "Near-field Communication (NFC)", definition: "A short-range wireless system used in tap-to-pay cards and phones." },
        { term: "Network Interface Card (NIC)", definition: "Hardware that connects a computer to a network." },
        { term: "New Technology File System (NTFS)", definition: "The main file system Windows uses to store and organize files." },
        { term: "Network Time Protocol (NTP)", definition: "A system that keeps computer clocks accurate over a network." }
    ],
    8: [
        { term: "Non-volatile Memory Express (NVMe)", definition: "A fast way for SSDs to connect to a computer." },
        { term: "Organic Light-emitting Diode (OLED)", definition: "A display technology where each pixel gives off its own light." },
        { term: "Optical Network Terminal (ONT)", definition: "A device that connects fiber internet into your home network." },
        { term: "Operating System (OS)", definition: "Software that runs the computer and manages programs and hardware." },
        { term: "One-time Password (OTP)", definition: "A code that works only once for secure logins." },
        { term: "Platform as a Service (PaaS)", definition: "A cloud service that provides tools for developers to build apps." },
        { term: "Privileged Access Management (PAM)", definition: "Security that controls powerful accounts like admins." },
        { term: "Personal Area Network (PAN)", definition: "A small network around one person, like Bluetooth between your phone and headphones." },
        { term: "Personal Computer (PC)", definition: "A computer designed for use by one person." },
        { term: "Peripheral Component Interconnect (PCI)", definition: "An older standard slot for adding hardware to a computer." },
        { term: "Peripheral Component Interconnect Express (PCIe)", definition: "A faster, newer slot for adding devices like graphics cards." },
        { term: "Personally Identifiable Information (PII)", definition: "Any data that can identify a person, like a name or Social Security number." }
    ],
    9: [
        { term: "Personal Identification Number (PIN)", definition: "A short number used to confirm identity, like at an ATM." },
        { term: "Personal Identity Verification (PIV)", definition: "A government-issued smart card for secure identification." },
        { term: "Power over Ethernet (PoE)", definition: "A system that sends power and network data over the same cable." },
        { term: "Post Office Protocol (POP3)", definition: "An email system that downloads messages to your device." },
        { term: "Power-on Self-test (POST)", definition: "A startup check that tests computer hardware before booting." },
        { term: "Potentially Unwanted Program (PUP)", definition: "Software that may cause problems even if it isn’t malware." },
        { term: "Remote Authentication Dial-in User Server (RADIUS)", definition: "A system that checks and manages remote logins." },
        { term: "Redundant Array of Independent Disks (RAID)", definition: "A way of storing data across multiple drives for speed or safety." },
        { term: "Random-access Memory (RAM)", definition: "Fast temporary memory that helps a computer run programs." },
        { term: "Remote Desktop Protocol (RDP)", definition: "A tool that lets you use another computer from far away." },
        { term: "Resilient File System (ReFS)", definition: "A Windows file system built to handle errors and large amounts of data." },
        { term: "Radio-frequency Identification (RFID)", definition: "A wireless system that uses tags and readers, like in keycards or store scanners." }
    ],
    10: [
        { term: "Registered Jack Function 11 (RJ11)", definition: "A small connector mainly used for telephone lines." },
        { term: "Registered Jack Function 45 (RJ45)", definition: "The common connector used for Ethernet network cables." },
        { term: "Remote Monitoring and Management (RMM)", definition: "Software that lets IT staff watch and fix computers from far away." },
        { term: "Rapid Security Response (RSR)", definition: "A fast security update that fixes urgent problems." },
        { term: "Software as a Service (SaaS)", definition: "A cloud service where apps run online instead of being installed." },
        { term: "Storage Area Network (SAN)", definition: "A special network that connects servers to large amounts of storage." },
        { term: "Security Assertions Markup Language (SAML)", definition: "A tool that lets users log in once and access many services securely." },
        { term: "Serial Attached SCSI (SAS)", definition: "A fast way to connect storage devices to servers." },
        { term: "Serial Advanced Technology Attachment (SATA)", definition: "A common connection for hard drives and SSDs." },
        { term: "Subscriber Connector (SC)", definition: "A type of connector used for fiber optic cables." },
        { term: "Supervisory Control and Data Acquisition (SCADA)", definition: "A system that controls and monitors industrial equipment." },
        { term: "Small Computer System Interface (SCSI)", definition: "An older standard for connecting computers to storage devices." }
    ],
    11: [
        { term: "Subscriber Identity Module (SIM)", definition: "A small card in phones that stores your number and network info." },
        { term: "Service-level Agreement (SLA)", definition: "A contract that defines the service and reliability a company promises." },
        { term: "Self-monitoring Analysis and Reporting Technology (SMART)", definition: "A system that checks hard drives for signs of failure." },
        { term: "Server Message Block (SMB)", definition: "A protocol for sharing files and printers on a network." },
        { term: "Short Message Service (SMS)", definition: "A system for sending text messages on phones." },
        { term: "Simple Mail Transfer Protocol (SMTP)", definition: "A protocol used to send emails." },
        { term: "Small Outline Dual In-line Memory Module (SODIMM)", definition: "A smaller type of RAM used in laptops." },
        { term: "Small Office/Home Office (SOHO)", definition: "Networking designed for a small business or home." },
        { term: "Standard Operating Procedure (SOP)", definition: "A step-by-step guide for doing tasks the correct way." },
        { term: "Sender Policy Framework (SPF)", definition: "A system that helps prevent fake emails by checking their source." },
        { term: "Software Process Improvement and Capability Determination (SPICE)", definition: "A model for improving how software is developed." },
        { term: "Structured Query Language (SQL)", definition: "A language used to manage and ask questions in databases." }
    ],
    12: [
        { term: "Solid-state Drive (SSD)", definition: "A fast storage device with no moving parts." },
        { term: "Secure Shell (SSH)", definition: "A secure way to log in to another computer over a network." },
        { term: "Service Set Identifier (SSID)", definition: "The name of a Wi-Fi network." },
        { term: "Single Sign-on (SSO)", definition: "Logging in once to access multiple systems or apps." },
        { term: "Straight Tip (ST) Connector", definition: "A round fiber optic cable connector that twists to lock." },
        { term: "Terminal Access Controller Access-control System (TACACS)", definition: "A system that checks and manages network logins." },
        { term: "Transmission Control Protocol (TCP)", definition: "A reliable system for sending data across networks." },
        { term: "Temporal Key Integrity Protocol (TKIP)", definition: "An older Wi-Fi security method that is less secure today." },
        { term: "Twisted Nematic (TN)", definition: "A type of LCD screen that is fast but has weaker colors." },
        { term: "Time-based One-time Password (TOTP)", definition: "A temporary login code that changes every few seconds." },
        { term: "Trusted Platform Module (TPM)", definition: "A secure chip on computers that stores encryption keys." },
        { term: "User Account Control (UAC)", definition: "A Windows feature that asks for permission before major system changes." }
    ],
    13: [
        { term: "User Datagram Protocol (UDP)", definition: "A fast way to send data over the internet, even if some pieces get lost." },
        { term: "Unified Extensible Firmware Interface (UEFI)", definition: "Modern software that starts a computer and replaces BIOS." },
        { term: "Universal Plug and Play (UPnP)", definition: "A system that lets devices automatically connect and share on a network." },
        { term: "Uninterruptible Power Supply (UPS)", definition: "A battery backup that keeps devices running during power outages." },
        { term: "Universal Serial Bus (USB)", definition: "A standard cable and port for connecting devices like keyboards and drives." },
        { term: "Unified Threat Management (UTM)", definition: "A device that combines multiple security tools into one." },
        { term: "Vertical Alignment (VA)", definition: "A type of LCD screen with deep blacks and good contrast." },
        { term: "Virtual Desktop Infrastructure (VDI)", definition: "A system where your desktop runs on a remote server instead of your computer." },
        { term: "Video Graphics Array (VGA)", definition: "An older video connector for monitors." },
        { term: "Virtual LAN (VLAN)", definition: "A network that separates devices into smaller groups within a bigger network." },
        { term: "Virtual Network Computer (VNC)", definition: "A tool that lets you control another computer remotely." },
        { term: "Voice over Internet Protocol (VoIP)", definition: "Making phone calls over the internet instead of regular phone lines." }
    ],
    14: [
        { term: "Virtual Private Network (VPN)", definition: "A secure, encrypted connection to a network over the internet." },
        { term: "Video Random-access Memory (VRAM)", definition: "Memory used by graphics cards to store images and videos." },
        { term: "Wide Area Network (WAN)", definition: "A network that covers a large geographic area, like the internet." },
        { term: "Windows Remote Management (WinRM)", definition: "A Windows tool for controlling computers remotely." },
        { term: "Wireless Internet Service Provider (WISP)", definition: "A company that provides internet through wireless signals." },
        { term: "Wireless LAN (WLAN)", definition: "A Wi-Fi network that connects devices without cables." },
        { term: "Wi-Fi Protected Access (WPA)", definition: "A security method for protecting Wi-Fi networks." },
        { term: "Wireless Wide Area Network (WWAN)", definition: "A wireless network that covers a large area, often using cellular signals." },
        { term: "Extended Detection and Response (XDR)", definition: "Security software that watches multiple parts of a system for threats." },
        { term: "Extended File System (ext)", definition: "A file system commonly used by Linux computers." },
        { term: "Cross-site Scripting (XSS)", definition: "A web security problem where attackers insert harmful code into websites." },
        { term: "Mini light-emitting diode (Mini-LED)", definition: "A display that uses tiny LEDs for brighter colors and better contrast." }
    ],
    15: [
        { term: "Private Cloud", definition: "Cloud computing used only by one organization." },
        { term: "Public Cloud", definition: "Cloud computing shared among many users or businesses." },
        { term: "Hybrid Cloud", definition: "A mix of private and public cloud services." },
        { term: "Community Cloud", definition: "Cloud services shared by several organizations with similar needs." },
        { term: "Type 1 Hypervisor", definition: "Software that runs directly on hardware to create virtual machines." },
        { term: "Type 2 Hypervisor", definition: "Software that runs on an operating system to create virtual machines." },
        { term: "Secure Boot", definition: "A system that prevents a computer from running unauthorized software at startup." },
        { term: "RAID 0", definition: "A storage setup that splits data across drives for speed but has no backup." },
        { term: "RAID 1", definition: "A storage setup that copies data to two drives for protection." },
        { term: "RAID 5", definition: "A storage setup that splits data and adds backup across three or more drives." },
        { term: "RAID 6", definition: "Like RAID 5 but can survive two drive failures." },
        { term: "RAID 10", definition: "A combination of RAID 1 and RAID 0 for both speed and backup." }
    ],
    16: [
        { term: "F-type", definition: "A coaxial cable connector often used for TV or internet." },
        { term: "Punchdown block & Punchdown tool", definition: "A board and tool used to connect wires in networking." },
        { term: "Digitizer", definition: "A device that converts drawings or handwriting into digital data." },
        { term: "Inverter", definition: "A device that changes DC power into AC power." },
        { term: "T568B vs T568A", definition: "Two wiring standards for Ethernet cables." },
        { term: "Coaxial (Coax)", definition: "A cable with a single copper wire and shield used for internet and TV." },
        { term: "Shielded Twisted Pair (STP) vs Unshielded Twisted Pair (UTP)", definition: "Types of network cables, where STP has extra protection from interference." },
        { term: "Plenum-rated", definition: "Cable approved to be used in air-handling spaces like ceilings." },
        { term: "Single-mode vs Multimode (fiber)", definition: "Types of fiber optic cables; single-mode is for long distances, multimode for shorter." },
        { term: "DisplayPort", definition: "A digital connector for video and audio, often used for monitors." },
        { term: "Pixel density", definition: "How many pixels are packed into a screen, affecting sharpness." },
        { term: "Refresh Rates", definition: "How many times per second a screen updates its image." }
    ],
    17: [
        { term: "Screen Resolution", definition: "The number of pixels displayed horizontally and vertically on a screen." },
        { term: "DHCP Scope", definition: "The range of IP addresses a DHCP server can assign." },
        { term: "DHCP Reservation", definition: "Setting a specific IP address for a device within DHCP." },
        { term: "Loopback plug", definition: "A tool used to test network ports." },
        { term: "Toner Probe", definition: "A tool used to trace and find cables." },
        { term: "Network tap", definition: "A device that copies network traffic for monitoring." },
        { term: "DHCP Exclusion", definition: "IP addresses a DHCP server is told not to assign." },
        { term: "Subnet mask", definition: "A number that helps computers know which part of an IP address is the network." },
        { term: "Wi-Fi analyzer", definition: "A tool that checks Wi-Fi signal strength and interference." },
        { term: "IPv4 vs IPv6", definition: "Two types of IP addresses; IPv6 allows more devices than IPv4." },
        { term: "Static IP vs Dynamic IP", definition: "A fixed IP versus one assigned automatically by DHCP." },
        { term: "Gateway", definition: "A device that connects a local network to the internet." }
    ],
    18: [
        { term: "Injectors (PoE injectors)", definition: "Devices that add power to network cables for PoE devices." },
        { term: "Firewall", definition: "A system that blocks unauthorized access to a network." },
        { term: "Patch Panel", definition: "A panel where network cables are organized and connected." },
        { term: "Access Points (AP)", definition: "Devices that let wireless devices connect to a network." },
        { term: "Switch", definition: "A device that connects multiple devices on a network and forwards data." },
        { term: "A vs AAAA records", definition: "DNS records; A points to IPv4 addresses, AAAA points to IPv6 addresses." },
        { term: "Proxy Servers", definition: "Servers that act as a middleman between your computer and the internet." },
        { term: "Telnet", definition: "An old method for logging into remote computers over a network." },
        { term: "TCP vs UDP", definition: "TCP is reliable data delivery; UDP is faster but may lose some data." },
        { term: "Docking Station", definition: "A device that lets a laptop connect to multiple peripherals easily." },
        { term: "Port Replicator", definition: "Similar to a docking station, it expands ports for laptops." },
        { term: "DHCP Lease", definition: "The amount of time a DHCP server lets a device use an IP address." }
    ]
};

const gameContainer = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
const sidebar = document.getElementById('sidebar');
const messageArea = document.getElementById('message-area');

let score = 0;
let flippedCards = [];
let matchedPairs = 0;
let lockBoard = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateCards(weekNumber) {
    gameContainer.innerHTML = '';
    messageArea.textContent = '';
    flippedCards = [];
    matchedPairs = 0;
    lockBoard = false;
    score = 0;
    scoreDisplay.textContent = score;

    const notecards = notecardData[weekNumber];
    if (!notecards) {
        gameContainer.innerHTML = '<p>No notecards for this week yet.</p>';
        return;
    }

    const cardsArray = [];
    notecards.forEach((card, index) => {
        cardsArray.push({ id: index, content: card.definition, type: 'definition' });
        cardsArray.push({ id: index, content: card.term.split('(')[0].trim(), type: 'term' });
    });

    const shuffledCards = shuffle(cardsArray);

    shuffledCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.id = card.id;
        cardElement.dataset.type = card.type;

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        cardFront.textContent = ' ';

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.textContent = card.content;

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardElement.appendChild(cardInner);

        cardElement.addEventListener('click', () => flipCard(cardElement));
        gameContainer.appendChild(cardElement);
    });
}

function flipCard(card) {
    if (lockBoard || card.classList.contains('flipped') || card.classList.contains('matched')) {
        return;
    }

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        lockBoard = true;
        checkForMatch();
    }
}

function checkForMatch() {
    const [firstCard, secondCard] = flippedCards;
    const isMatch = firstCard.dataset.id === secondCard.dataset.id;

    if (isMatch) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    setTimeout(() => {
        flippedCards.forEach(card => {
            // Cards are already flipped due to the click.
            // We just need to mark them as 'matched'
            card.classList.add('matched');
        });
        updateScore(2);
        matchedPairs++;
        checkWinCondition();
        resetBoard();
    }, 1000);
}

function unflipCards() {
    setTimeout(() => {
        flippedCards.forEach(card => {
            card.classList.remove('flipped');
        });
        updateScore(-1);
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [flippedCards, lockBoard] = [[], false];
}

function updateScore(points) {
    score += points;
    scoreDisplay.textContent = score;
}

function checkWinCondition() {
    const currentWeekCards = notecardData[currentWeek];
    if (matchedPairs === currentWeekCards.length) {
        messageArea.textContent = 'Congratulations! You won!';
        messageArea.style.color = '#3498db';
    }
}

let currentWeek = 1;

function createSidebarLinks() {
    for (let i = 1; i <= 18; i++) {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = `Week ${i} notecard`;
        link.dataset.week = i;
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
            e.target.classList.add('active');
            currentWeek = parseInt(e.target.dataset.week);
            generateCards(currentWeek);
        });
        sidebar.appendChild(link);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createSidebarLinks();
    generateCards(currentWeek);
    document.querySelector('.sidebar a[data-week="1"]').classList.add('active');
});
