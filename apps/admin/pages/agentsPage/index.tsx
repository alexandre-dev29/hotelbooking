import {
  DeleteIcon,
  EditIcon,
  EyeIcon,
  IconButton,
  LayoutProtected,
  useGetAllAgentQuery,
} from '@hotelbooking/shared-ui-component';
import { Col, Row, Table, Tooltip } from '@nextui-org/react';
import React from 'react';

/* eslint-disable-next-line */
export interface AgentsProps {}

export interface AgentsForTable {
  agentId: string;
  agentName: string;
  agentPhoneNumber: string;
  hireDate: string;
  hotelName: string;
  role: string;
}

export function AgentsPage(props: AgentsProps) {
  const columns = [
    { name: 'NAME', uid: 'agentName' },
    { name: 'Role', uid: 'role' },
    { name: 'phoneNumber', uid: 'agentPhoneNumber' },
    { name: 'HOTEL NAME', uid: 'hotelName' },
    { name: 'Hire Date', uid: 'hireDate' },
    { name: 'ACTIONS', uid: 'actions' },
  ];
  let users: AgentsForTable[] = [];
  const renderCell = (user: AgentsForTable, columnKey: any) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case 'actions':
        return (
          <Row justify="center" align="center" css={{ w: '80%' }}>
            <Col css={{ d: 'flex' }}>
              <Tooltip content="Details">
                <IconButton
                  onClick={() => console.log('View user', user?.agentId)}
                >
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: 'flex' }}>
              <Tooltip content="Edit user">
                <IconButton
                  onClick={() => console.log('Edit user', user?.agentId)}
                >
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: 'flex' }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => console.log('Delete user', user?.agentId)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };

  const { loading, data, error } = useGetAllAgentQuery({
    fetchPolicy: 'cache-and-network',
    ssr: true,
  });

  if (!loading) {
    users = data.getAllAgents.map((current) => {
      return {
        agentId: current.agentId,
        hotelName: current.Hotel.hotelName,
        role: current.Role.userRole,
        hireDate: current.createdAt,
        agentName: current.agentName,
        agentPhoneNumber: current.agentPhoneNumber,
      } as AgentsForTable;
    });
  }

  return (
    <LayoutProtected>
      <div className={'flex justify-center mt-10'}>
        <h2 className={'text-gray-600'}>Manage all you agents</h2>
      </div>

      <div className={'p-10'}>
        {!loading && (
          <Table
            aria-label="Table For Agents Management"
            css={{
              height: 'auto',
              minWidth: '100%',
              background: '$white',
              boxShadow: '$xs',
            }}
            striped
            color={'success'}
            lined
            headerLined
            shadow={true}
          >
            <Table.Header columns={columns}>
              {(column) => (
                <Table.Column key={column.uid}>{column.name}</Table.Column>
              )}
            </Table.Header>
            <Table.Body items={users}>
              {(item: AgentsForTable) => (
                <Table.Row key={item.agentId}>
                  {(columnKey) => (
                    <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                  )}
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        )}
      </div>
    </LayoutProtected>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      protected: true,
      userTypes: ['User'],
    },
  };
};

export default AgentsPage;
