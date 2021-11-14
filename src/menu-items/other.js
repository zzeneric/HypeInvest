// assets
import { IconScan, IconHelp } from '@tabler/icons';

// constant
const icons = { IconScan, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    title: 'Information',
    type: 'group',
    children: [
        {
            id: 'doc',
            title: 'Documentation',
            type: 'item',
            url: '/documentation',
            icon: icons.IconHelp,
            breadcrumbs: false
        }
        /*{
            id: 'documentation',
            title: 'Documentation',
            type: 'item',
            url: 'https://codedthemes.gitbook.io/berry/',
            icon: icons.IconHelp,
            external: true,
            target: true
        }*/
    ]
};

export default other;
