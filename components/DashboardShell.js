import React from 'react';
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Button,
    Flex,
    Link,
    Avatar,
    Text,
} from '@chakra-ui/react';

import {useUserContext} from '@/lib/auth';
import AddSiteModal from './AddSiteModal';

const DashboardShell = ({children}) => {
    const {user, logoutUser} = useUserContext();

    return (
        <Box backgroundColor="gray.100" h="100vh">
            <Flex backgroundColor="white" mb={16} w="full">
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    pt={4}
                    pb={4}
                    maxW="1250px"
                    margin="0 auto"
                    w="full"
                    px={8}
                >
                    <Flex>
                        <Link mr={4}>Sites</Link>
                        <Link>Feedback</Link>
                    </Flex>
                    <Flex justifyContent="center" alignItems="center">
                        {user && (
                            <Button variant="ghost" mr={2} onClick={() => logoutUser()}>
                                Log Out
                            </Button>
                        )}
                        <Avatar size="sm" src={user?.photoURL} />
                    </Flex>
                </Flex>
            </Flex>
            <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink>Sites</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Flex justifyContent="space-between">
                    <Heading mb={8}>My Sites</Heading>
                    <AddSiteModal>+ Add Site</AddSiteModal>
                </Flex>
                {children}
            </Flex>
        </Box>
    );
};

export default DashboardShell;
