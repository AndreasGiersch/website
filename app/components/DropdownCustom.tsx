import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';

export type DropdownItemType = {
    key: string;
    description: string;
    title: string;
    url?: string;
};

export type DropdownItemListType = DropdownItemType[];

export type MenuDefinition = {
    ariaLabel: string;
    items: DropdownItemListType;
};

export type NavigationDropdownItemType = {
    name: string;
    path: string;
    shortName: string;
    menu: MenuDefinition;
};

export type DropdownCustomProps = {
    navigationDropdownItem: NavigationDropdownItemType;
};

function DropdownCustom({ navigationDropdownItem }: DropdownCustomProps) {
    return (
        <Dropdown
            placement="bottom-start"
            classNames={{
                content: 'py-1 px-1 border border-default-200 bg-white',
            }}
        >
            <DropdownTrigger>
                <Button
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent focus:ring-1 focus:ring-slate-400"
                    radius="sm"
                    variant="light"
                >
                    <span className="sm:max-md:w-[120px] sm:max-md:truncate">{navigationDropdownItem.name}</span>
                </Button>
            </DropdownTrigger>

            <DropdownMenu
                aria-label={navigationDropdownItem.menu!.ariaLabel}
                className="w-[340px]"
                itemClasses={{
                    base: 'gap-4',
                }}
            >
                {navigationDropdownItem.menu!.items.map((item) => (
                    <DropdownItem key={item.key} description={item.description} href={item.url ? item.url : '/'}>
                        <span className="font-bold">{item.title}</span>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}

export default DropdownCustom;
