const request = require('supertest');
const app = require('../app'); 

const {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  getSingleEmployee,
} = require('../api/controllers/employees/employeeController'); 

describe('Employee API Endpoints', () => {
    let employeeId;

    // Have a predefined dataset
    test('add new employees', async () => {
        const employeeData = {
            first_name: 'John',
            last_name: 'Doe',
            phone: '+94345678920',
            email: 'john.doe@example.com',
            gender: 'M',
            photo: '',
        };

        const response = await request(app).post('/employee').set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImphbmUiLCJlbWFpbCI6ImphbmU1MzJAZ21haWwuY29tIn0sImlhdCI6MTcwMzY0NDc4NX0.El0wA6FWJ7-vM4xmgEV_M67TsHGFI8mN9AroPiqRVZ8').send(employeeData);
        expect(response.status).toBe(200);
        employeeId = response.body.data.id;
    });

    describe('GET Request to Fetch all Employees', () => {
        test('should get all employees', async () => {
        const response = await request(app).get('/employee');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Employee details fetched successfully');
        expect(response.body.data).toHaveLength(1);
        });
    });

    describe('DELETE request to delete employee', () => {
            test('should delete an existing employee', async () => {
                const response = await request(app).delete(`/employee/${employeeId}`);
                expect(response.status).toBe(200);
                expect(response.body.message).toBe('Employee deleted successfully');
            });
    });
});
