const DangerousIcon = props => (
    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 64 64" fill="none" {...props}>
        <g strokeLinejoin="round" strokeWidth={1.5} clipPath="url(#a)">
            <path stroke="#12233D" d="M16 47h32" />
            <path
                stroke="red"
                d="M23.043 33c-.51 5.867 3.608 10.444 5.73 12-3.056-5.867-1.273-8.667 0-9.333 0 2.666 2.122 3.777 3.184 4-1.528-5.334 1.06-8 2.546-8.667 0 3.333 2.547 4.667 3.184 7.333.509 2.134-.637 5.334-1.274 6.667 10.696-6.933 3.608-21.556-1.273-28-1.273 7.333-11.46 8.667-12.097 16Z"
            />
            <path stroke="#12233D" d="M32.226 63 1 32.226 32.226 1 63 32.226 32.226 63Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h64v64H0z" />
            </clipPath>
        </defs>
    </svg>
);

export default DangerousIcon;
